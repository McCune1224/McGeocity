<script lang="ts">
	import { SITE_URL } from "$lib/site";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	const subscribeUrl = "https://mccune1224.substack.com/subscribe";
	const canonicalUrl = `${SITE_URL}/writing`;
	let socialImageUrl = $derived(data.archive.publication.imageUrl ?? `${SITE_URL}/og.png`);
	let posts = $derived(data.archive.posts);
	let featuredPost = $derived(posts[0]);
	let archivePosts = $derived(posts.slice(1));

	function formatDate(date: string): string {
		return new Intl.DateTimeFormat("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
			timeZone: "UTC",
		}).format(new Date(date));
	}
</script>

<svelte:head>
	<title>Bytes for a Bit | Writing by Alex McCune</title>
	<meta name="description" content="Writing from Bytes for a Bit by Alex McCune. Occasional thoughts on current technology and how we interact with it." />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content="Bytes for a Bit | Writing by Alex McCune" />
	<meta property="og:description" content="Writing from Bytes for a Bit by Alex McCune. Occasional thoughts on current technology and how we interact with it." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="Alex McCune" />
	<meta property="og:image" content={socialImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Bytes for a Bit | Writing by Alex McCune" />
	<meta name="twitter:description" content="Writing from Bytes for a Bit by Alex McCune. Occasional thoughts on current technology and how we interact with it." />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:image" content={socialImageUrl} />
</svelte:head>

<section id="writing" class="min-h-screen bg-bg-primary px-4 pb-12 pt-16 text-text-primary sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
	<div class="mx-auto max-w-content">
		<header class="mb-10 flex flex-col gap-6 rounded-2xl border border-border-primary bg-bg-secondary p-5 sm:mb-12 sm:flex-row sm:items-center sm:justify-between sm:p-8">
			<div class="flex min-w-0 items-start gap-4 sm:gap-5">
				{#if data.archive.publication.imageUrl}
					<img
						src={data.archive.publication.imageUrl}
						alt=""
						width="72"
						height="72"
						fetchpriority="high"
						decoding="async"
						class="h-14 w-14 shrink-0 rounded-xl border border-border-primary object-cover sm:h-[72px] sm:w-[72px]"
					/>
				{:else}
					<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-primary bg-bg-primary text-accent-primary sm:h-[72px] sm:w-[72px]" aria-hidden="true">
						<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
							<path d="M4 5.5v16M8 7h8M8 11h8" />
						</svg>
					</div>
				{/if}

				<div class="min-w-0">
					<p class="text-xs font-semibold uppercase tracking-[0.16em] text-accent-secondary">A personal newsletter</p>
					<h1 class="mt-1 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
						{data.archive.publication.title}
					</h1>
					<p class="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
						{data.archive.publication.description}
					</p>
					{#if featuredPost}
						<p class="mt-3 text-xs font-medium text-text-tertiary sm:text-sm">
							<span>{posts.length} {posts.length === 1 ? "article" : "articles"} shown</span>
							<span class="mx-2 text-border-secondary" aria-hidden="true">·</span>
							<span>Latest on <time datetime={featuredPost.publishedAt}>{formatDate(featuredPost.publishedAt)}</time></span>
						</p>
					{/if}
				</div>
			</div>

			<a
				href={subscribeUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-accent-primary px-4 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary sm:self-center"
			>
				Subscribe on Substack
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M7 17 17 7M7 7h10v10" />
				</svg>
			</a>
		</header>

		{#if featuredPost}
			<section aria-label="Featured essay" class="mb-12">
				<article class="grid overflow-hidden rounded-2xl border border-border-primary bg-bg-secondary md:grid-cols-[0.95fr_1.05fr]">
					{#if featuredPost.imageUrl}
						<div class="relative aspect-[16/10] overflow-hidden bg-bg-tertiary md:aspect-auto md:min-h-[340px]">
							<img
								src={featuredPost.imageUrl}
								alt=""
								loading="eager"
								fetchpriority="high"
								decoding="async"
								class="absolute inset-0 h-full w-full object-cover"
							/>
						</div>
					{:else}
						<div class="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-primary text-accent-primary md:aspect-auto md:min-h-[340px]" aria-hidden="true">
							<svg class="h-14 w-14 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
								<path d="M4 5.5v16M8 7h8M8 11h8" />
							</svg>
						</div>
					{/if}

					<div class="flex flex-col items-start p-5 sm:p-8 md:p-9">
						<div class="flex flex-wrap items-center gap-3">
							<span class="rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-primary">
								Featured essay
							</span>
							<time datetime={featuredPost.publishedAt} class="text-xs font-medium text-text-tertiary sm:text-sm">
								{formatDate(featuredPost.publishedAt)}
							</time>
						</div>

						<h2 class="mt-5 text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl">
							{featuredPost.title}
						</h2>
						{#if featuredPost.summary}
							<p class="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
								{featuredPost.summary}
							</p>
						{/if}

						<a
							href={featuredPost.url}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-accent-primary transition-colors hover:text-accent-hover focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
						>
							Read the essay on Substack
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M7 17 17 7M7 7h10v10" />
							</svg>
						</a>
					</div>
				</article>
			</section>

			{#if archivePosts.length > 0}
				<section aria-labelledby="archive-heading" class="space-y-5">
					<div class="flex flex-wrap items-end justify-between gap-3">
						<div>
							<p class="text-xs font-semibold uppercase tracking-[0.16em] text-accent-secondary">Keep exploring</p>
							<h2 id="archive-heading" class="mt-1 text-2xl font-semibold tracking-tight text-text-primary">More from the archive</h2>
						</div>
						<span class="text-sm text-text-tertiary">{archivePosts.length} {archivePosts.length === 1 ? "more essay" : "more essays"}</span>
					</div>

					<ol class="space-y-4">
						{#each archivePosts as post (post.url)}
							<li>
								<article class="grid overflow-hidden rounded-xl border border-border-primary bg-bg-secondary sm:grid-cols-[180px_1fr]">
									{#if post.imageUrl}
										<div class="relative aspect-[16/10] overflow-hidden bg-bg-tertiary sm:aspect-auto sm:min-h-[180px]">
											<img src={post.imageUrl} alt="" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover" />
										</div>
									{:else}
										<div class="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-primary text-accent-primary sm:aspect-auto" aria-hidden="true">
											<svg class="h-8 w-8 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
												<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
												<path d="M4 5.5v16M8 7h8M8 11h8" />
											</svg>
										</div>
									{/if}
									<div class="flex flex-col items-start p-5 sm:justify-center sm:p-6">
										<time datetime={post.publishedAt} class="text-xs font-medium text-text-tertiary sm:text-sm">
											{formatDate(post.publishedAt)}
										</time>
										<h3 class="mt-2 text-xl font-semibold leading-snug tracking-tight text-text-primary">
											<a href={post.url} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-accent-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary">
												{post.title}
											</a>
										</h3>
										{#if post.summary}
											<p class="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">{post.summary}</p>
										{/if}
										<a href={post.url} target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-primary transition-colors hover:text-accent-hover focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary">
											Read on Substack
											<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
												<path d="M7 17 17 7M7 7h10v10" />
											</svg>
										</a>
									</div>
								</article>
							</li>
						{/each}
					</ol>
				</section>
			{/if}
		{:else}
			<section class="rounded-2xl border border-border-primary bg-bg-secondary p-6 sm:p-8" aria-live="polite">
				<h2 class="text-xl font-semibold">{data.error ? "The archive could not load" : "No essays in the archive yet"}</h2>
				<p class="mt-2 max-w-2xl leading-relaxed text-text-secondary">
					{data.error
						? "The latest writing could not be loaded right now. The Substack publication is still available."
						: "There are no public essays to show here yet. Visit the Substack publication to read or subscribe."}
				</p>
				<a
					href={subscribeUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-primary hover:text-accent-hover focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
				>Open the publication <span aria-hidden="true" class="ml-1">↗</span></a
				>
			</section>
		{/if}
	</div>
</section>
