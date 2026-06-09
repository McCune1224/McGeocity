<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";

	interface Certification {
		name: string;
		issuer: string;
		status: "earned" | "in-progress";
		date?: string;
	}

	const certifications: Certification[] = [
		{
			name: "CompTIA Security+",
			issuer: "CompTIA",
			status: "earned",
		},
		{
			name: "ITIL v4 Foundation",
			issuer: "AXELOS",
			status: "earned",
		},
		{
			name: "HIPAA Privacy & Security",
			issuer: "Annual Training",
			status: "earned",
		},
	];
</script>

<section id="certifications" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
	<div class="max-w-content mx-auto">
		<SectionHeading
			title="Certifications"
			subtitle="Industry credentials validating expertise in IT service management and systems administration."
		/>

		<div class="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
			{#each certifications as cert}
				<div
					class="relative p-4 sm:p-6 rounded-lg border-2 bg-bg-primary transition-colors duration-200"
					class:border-dashed={cert.status === "in-progress"}
					class:border-border-primary={cert.status === "earned"}
					class:border-warning={cert.status === "in-progress"}
					class:hover:border-accent-primary={cert.status === "earned"}
				>
					<!-- Status badge -->
					<div class="absolute top-3 right-3 sm:top-4 sm:right-4">
						{#if cert.status === "earned"}
							<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
								Earned
							</span>
						{:else}
							<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">
								In Progress
							</span>
						{/if}
					</div>

					<!-- Cert icon -->
					<div class="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg bg-accent-primary/10 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>

					<h3 class="text-base sm:text-lg font-semibold text-text-primary mb-1">
						{cert.name}
					</h3>
					<p class="text-sm text-text-secondary mb-3">
						{cert.issuer}
					</p>

					{#if cert.status === "in-progress"}
						<div class="mt-3">
							<div class="h-1.5 w-full bg-bg-tertiary rounded-full overflow-hidden">
								<div class="h-full bg-warning rounded-full w-[40%]"></div>
							</div>
							<p class="mt-2 text-xs text-text-tertiary">Studying — 40% through coursework</p>
						</div>
					{/if}

					{#if cert.date}
						<p class="mt-3 text-xs text-text-tertiary">{cert.date}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
