<script lang="ts">
	let photoLoaded = $state(false);
</script>

<section
	id="hero"
	class="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
>
	<div class="max-w-content mx-auto flex flex-col items-center text-center gap-8 bg-bg-primary/85 backdrop-blur-sm rounded-2xl px-6 py-10 sm:px-10 sm:py-12 border border-border-primary">
		<!-- Avatar -->
		<div class="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl bg-bg-tertiary border border-border-primary overflow-hidden flex-shrink-0">
			<img
				src="/avatar.png"
				alt="Alex McCune"
				class="absolute inset-0 w-full h-full object-cover"
				class:hidden={!photoLoaded}
				onload={() => photoLoaded = true}
				onerror={() => photoLoaded = false}
			/>
			{#if !photoLoaded}
				<div class="absolute inset-0 flex items-center justify-center">
					<svg viewBox="0 0 100 100" class="w-20 h-20 sm:w-24 sm:h-24 text-accent-primary opacity-50">
						<polygon points="50,8 88,30 88,70 50,92 12,70 12,30" fill="none" stroke="currentColor" stroke-width="2.5" />
						<path d="M50 22 L76 38 L76 62 L50 80 L24 62 L24 38 Z" fill="none" stroke="currentColor" stroke-width="2" />
						<circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7" />
					</svg>
				</div>
			{/if}
		</div>

		<!-- Text content -->
		<div class="max-w-2xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
				Alex McCune
			</h1>

			<p class="mt-4 text-xl sm:text-2xl text-accent-primary font-medium">
				IT Systems Administrator
			</p>

			<!-- Focus areas tagline -->
			<p class="mt-4 text-base sm:text-lg text-text-tertiary font-medium tracking-wide">
				Enterprise IT Infrastructure &middot; Automation &middot; Identity &amp; Access Management &middot; Security
			</p>

			<div class="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-base sm:text-lg text-text-tertiary">
				<span class="inline-flex items-center gap-1.5">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
					</svg>
					Rochester, NY
				</span>
				<span class="text-border-secondary hidden sm:inline">&middot;</span>
				<a href="mailto:alexmccune1224@gmail.com" class="inline-flex items-center gap-1.5 hover:text-accent-primary transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
					</svg>
					alexmccune1224@gmail.com
				</a>
			</div>

			<p class="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto">
				IT Systems Administrator with 3+ years of experience managing enterprise infrastructure, automating IT operations, and enforcing security compliance across large-scale healthcare environments. Currently at the University of Rochester Medical Center, I orchestrate security patching, system migrations, and full-scope identity lifecycle management — achieving zero unscheduled downtime and zero clinical impact across 9 hospitals and 100+ outpatient facilities.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<a
					href="#contact"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white text-base font-medium hover:bg-accent-hover transition-colors shadow-sm"
				>
					Get in Touch
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-secondary text-text-secondary hover:text-accent-primary hover:border-accent-primary text-base font-medium transition-colors"
				>
					Resume
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
