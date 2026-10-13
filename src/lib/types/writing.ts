export type SubstackPost = {
	title: string;
	summary: string;
	publishedAt: string;
	url: string;
	imageUrl?: string;
};

export type SubstackArchive = {
	publication: {
		title: string;
		description: string;
		imageUrl?: string;
	};
	posts: SubstackPost[];
};
