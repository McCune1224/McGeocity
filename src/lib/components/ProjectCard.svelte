<script lang="ts">
	interface Props {
		name: string;
		description: string;
		tech: string[];
		demo?: string;
		code?: string;
		image?: string;
	}

	let { name, description, tech, demo, code, image }: Props = $props();

	let imageFailed = $state(false);

	const showImage = $derived(image !== undefined && !imageFailed);

	const monogram = $derived(
		name
			.replace(/[^a-zA-Z0-9]/g, "")
			.slice(0, 2)
			.toUpperCase()
	);
</script>

<article
	class="group rounded-lg border border-border-primary bg-bg-secondary hover:border-accent-primary hover:shadow-sm transition-all duration-200 overflow-hidden flex flex-col"
>
	<!-- Screenshot -->
	<div class="relative aspect-[16/9] bg-bg-tertiary border-b border-border-primary overflow-hidden">
		{#if showImage}
			<img
				src={image}
				alt={`${name} screenshot`}
				width="800"
				height="450"
				loading="lazy"
				decoding="async"
				class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
				onerror={() => (imageFailed = true)}
			/>
		{:else}
			<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-secondary">
				<span class="text-4xl font-bold tracking-wide text-accent-primary/50 select-none">{monogram}</span>
			</div>
		{/if}
	</div>

	<!-- Content -->
	<div class="p-6 flex flex-col flex-1">
		<h3 class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
			{name}
		</h3>

		<p class="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
			{description}
		</p>

		<div class="flex flex-wrap gap-1.5 mb-4">
			{#each tech as item}
				<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-bg-tertiary text-text-secondary font-mono">
					{item}
				</span>
			{/each}
		</div>

		<div class="flex items-center gap-3 pt-3 border-t border-border-primary">
			{#if code}
				<a
					href={code}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
					Source
				</a>
			{/if}

			{#if demo}
				<a
					href={demo}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
					Live Demo
				</a>
			{/if}
		</div>
	</div>
</article>