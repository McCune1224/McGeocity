import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";
import { SITE_URL } from "$lib/site";

const canonicalHost = new URL(SITE_URL).hostname;
const redirectHosts = new Set([
	"alexmccune.com",
	"www.alexmccune.com",
	"alexmccune.dev"
]);

export const handle: Handle = async ({ event, resolve }) => {
	const hostname = event.url.hostname.toLowerCase();
	if (hostname !== canonicalHost && redirectHosts.has(hostname)) {
		redirect(308, `${SITE_URL}${event.url.pathname}${event.url.search}`);
	}

	return resolve(event);
};
