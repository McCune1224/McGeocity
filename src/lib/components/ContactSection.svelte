<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";

	let copied = $state(false);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText("alexmccune1224@gmail.com");
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			// Fallback — user can just click the mailto link
		}
	}
</script>

<section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary ">
	<div class="max-w-content mx-auto text-center">
		<div class="mt-12 max-w-lg mx-auto space-y-8">
			<!-- Email -->
			<div class="p-6 rounded-lg border border-border-primary bg-bg-primary ">
				<div class="flex items-center justify-center gap-3 mb-3">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					<a
						href="mailto:alexmccune1224@gmail.com"
						class="text-lg font-medium text-text-primary hover:text-accent-primary transition-colors"
					>
						alexmccune1224@gmail.com
					</a>
				</div>
				<button
					onclick={copyEmail}
					class="text-sm font-medium text-text-tertiary hover:text-accent-primary transition-colors"
				>
					{#if copied}
						Copied to clipboard!
					{:else}
						Click to copy email
					{/if}
				</button>
			</div>

			<!-- Social links -->
			<div class="flex items-center justify-center gap-4">
				<a
					href="https://github.com/mccune1224"
					target="_blank"
					rel="noopener noreferrer"
					class="p-3 rounded-lg border border-border-primary hover:border-accent-primary hover:bg-bg-tertiary transition-all"
					aria-label="GitHub"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</a>

				<a
					href="https://linkedin.com/in/mccune1224"
					target="_blank"
					rel="noopener noreferrer"
					class="p-3 rounded-lg border border-border-primary hover:border-accent-primary hover:bg-bg-tertiary transition-all"
					aria-label="LinkedIn"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>

				<a
					href="https://bsky.app/profile/mckusa.bsky.social"
					target="_blank"
					rel="noopener noreferrer"
					class="p-3 rounded-lg border border-border-primary hover:border-accent-primary hover:bg-bg-tertiary transition-all"
					aria-label="Bluesky"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
						<path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/>
					</svg>
				</a>

				<a
					href="https://mccune1224.substack.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="p-3 rounded-lg border border-border-primary hover:border-accent-primary hover:bg-bg-tertiary transition-all"
					aria-label="Substack"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" role="img">
						<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
					</svg>
				</a>
			</div>

			<!-- Location -->
			<p class="text-sm text-text-tertiary">
				Rochester, NY
			</p>
		</div>
	</div>
</section>
