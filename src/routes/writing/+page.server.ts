import { getSubstackArchive } from "$lib/server/substack";
import type { SubstackArchive } from "$lib/types/writing";
import type { PageServerLoad } from "./$types";

const fallbackArchive: SubstackArchive = {
	publication: {
		title: "Bytes for a Bit",
		description: "Thoughts on current tech and how we interact with it, in bite-sized readings."
	},
	posts: []
};

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		const archive = await getSubstackArchive();
		setHeaders({
			"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
		});
		return { archive, error: false };
	} catch {
		setHeaders({ "Cache-Control": "no-store" });
		return { archive: fallbackArchive, error: true };
	}
};
