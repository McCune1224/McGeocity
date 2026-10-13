import type { SubstackArchive, SubstackPost } from "$lib/types/writing";

const FEED_URL = "https://mccune1224.substack.com/feed";
const SUBSTACK_ORIGIN = "https://mccune1224.substack.com";
const IMAGE_HOSTS = new Set(["substack-post-media.s3.amazonaws.com", "substackcdn.com"]);
const MAX_POSTS = 10;
const MAX_ITEMS_TO_PARSE = 50;
const MAX_FEED_BYTES = 5 * 1024 * 1024;
const MAX_SUMMARY_LENGTH = 320;

const namedEntities: Record<string, string> = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	quot: '"',
	nbsp: " ",
	mdash: "—",
	ndash: "–",
	lsquo: "'",
	rsquo: "'",
	ldquo: '"',
	rdquo: '"',
	ellip: "…"
};

function decodeEntities(value: string): string {
	return value.replace(/&(#(?:x[\da-f]+|\d+)|[a-z][\da-z]+);/gi, (entity, code: string) => {
		if (code[0] === "#") {
			const isHex = code[1]?.toLowerCase() === "x";
			const point = Number.parseInt(code.slice(isHex ? 2 : 1), isHex ? 16 : 10);
			if (Number.isInteger(point) && point > 0 && point <= 0x10ffff && !(point >= 0xd800 && point <= 0xdfff)) {
				return String.fromCodePoint(point);
			}
			return entity;
		}
		return namedEntities[code.toLowerCase()] ?? entity;
	});
}

function getTagValue(xml: string, name: string): string | undefined {
	const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const match = xml.match(new RegExp(`<(?:(?:[\\w.-]+):)?${escapedName}\\b[^>]*>([\\s\\S]*?)<\\/(?:(?:[\\w.-]+):)?${escapedName}\\s*>`, "i"));
	return match?.[1];
}

function textOnly(value: string): string {
	const withoutCdata = value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
	const decoded = decodeEntities(withoutCdata);
	return decodeEntities(
		decoded
			.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, " ")
			.replace(/<[^>]*>/g, " ")
			.replace(/\s+/g, " ")
	).trim();
}

function safePostUrl(value: string | undefined): string | undefined {
	if (!value) return undefined;
	try {
		const url = new URL(textOnly(value));
		if (url.protocol !== "https:" || url.origin !== SUBSTACK_ORIGIN) return undefined;
		return url.toString();
	} catch {
		return undefined;
	}
}

function safeImageUrl(value: string | undefined): string | undefined {
	if (!value) return undefined;
	try {
		const url = new URL(textOnly(value));
		if (url.protocol !== "https:" || !IMAGE_HOSTS.has(url.hostname)) return undefined;
		return url.toString();
	} catch {
		return undefined;
	}
}

function getEnclosureImageUrl(item: string): string | undefined {
	const match = item.match(/<enclosure\b[^>]*\burl\s*=\s*(?:"([^"]*)"|'([^']*)')[^>]*\/?\s*>/i);
	return safeImageUrl(match?.[1] ?? match?.[2]);
}

function parseItem(item: string): SubstackPost | undefined {
	const title = textOnly(getTagValue(item, "title") ?? "");
	const rawDate = textOnly(getTagValue(item, "pubDate") ?? getTagValue(item, "date") ?? "");
	const rawUrl = getTagValue(item, "link") ?? getTagValue(item, "guid");
	const rawSummary = getTagValue(item, "description") ?? getTagValue(item, "encoded") ?? "";
	const url = safePostUrl(rawUrl);
	const timestamp = Date.parse(rawDate);
	const summary = textOnly(rawSummary);

	if (!title || !url || !Number.isFinite(timestamp)) return undefined;

	return {
		title,
		summary: summary.length > MAX_SUMMARY_LENGTH
			? `${summary.slice(0, MAX_SUMMARY_LENGTH - 1).trimEnd()}…`
			: summary,
		publishedAt: new Date(timestamp).toISOString(),
		url,
		imageUrl: getEnclosureImageUrl(item)
	};
}

/** Parse the public RSS feed into safe publication and post data. */
export function parseSubstackFeed(xml: string): SubstackArchive {
	if (!/<(?:rss|feed)\b/i.test(xml) || !/<\/(?:rss|feed)\s*>/i.test(xml)) {
		throw new Error("Substack returned an invalid feed.");
	}

	const channel = getTagValue(xml, "channel") ?? xml;
	const channelImage = getTagValue(channel, "image");
	const publicationTitle = textOnly(getTagValue(channel, "title") ?? "Bytes for a Bit");
	const publicationDescription = textOnly(
		getTagValue(channel, "description") ??
			"Thoughts on current tech and how we interact with it, in bite-sized readings."
	);
	const publicationImageUrl = safeImageUrl(
		channelImage ? getTagValue(channelImage, "url") : undefined
	);

	const items: SubstackPost[] = [];
	let itemsSeen = 0;
	for (const match of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item\s*>/gi)) {
		if (itemsSeen >= MAX_ITEMS_TO_PARSE) break;
		itemsSeen += 1;
		const post = parseItem(match[1]);
		if (post) items.push(post);
	}

	return {
		publication: {
			title: publicationTitle || "Bytes for a Bit",
			description: publicationDescription,
			imageUrl: publicationImageUrl
		},
		posts: items
			.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
			.slice(0, MAX_POSTS)
	};
}

async function readLimitedFeed(response: Response): Promise<string> {
	const contentLength = Number(response.headers.get("content-length"));
	if (Number.isFinite(contentLength) && contentLength > MAX_FEED_BYTES) {
		throw new Error("Substack feed is larger than expected.");
	}

	if (!response.body) return "";

	const reader = response.body.getReader();
	const chunks: Uint8Array[] = [];
	let totalBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBytes += value.byteLength;
			if (totalBytes > MAX_FEED_BYTES) {
				await reader.cancel();
				throw new Error("Substack feed is larger than expected.");
			}
			chunks.push(value);
		}
	} finally {
		reader.releaseLock();
	}

	const bytes = new Uint8Array(totalBytes);
	let offset = 0;
	for (const chunk of chunks) {
		bytes.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return new TextDecoder().decode(bytes);
}

export async function getSubstackArchive(): Promise<SubstackArchive> {
	const response = await fetch(FEED_URL, {
		headers: { accept: "application/rss+xml, application/xml, text/xml" },
		signal: AbortSignal.timeout(8000)
	});

	if (!response.ok) {
		throw new Error(`Substack feed request failed with status ${response.status}.`);
	}

	return parseSubstackFeed(await readLimitedFeed(response));
}
