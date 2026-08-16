<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";

	interface Certification {
		name: string;
		issuer: string;
		date?: string;
		status: "earned" | "in-progress";
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
			name: "HIPAA Privacy & Security Training",
			issuer: "URMC (Annual)",
			status: "earned",
		},
	];
</script>

<section id="certifications" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
	<div class="max-w-content mx-auto">
		<SectionHeading
			title="Certifications"
			subtitle="Vendor and industry certifications in security, service management, and compliance."
		/>

		<div class="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
			{#each certifications as cert}
				<div
					class="relative p-4 sm:p-6 rounded-lg border-2 bg-bg-primary transition-colors duration-200"
					class:border-border-primary={cert.status === "earned"}
					class:border-dashed={cert.status === "in-progress"}
					class:border-accent-primary={cert.status === "in-progress"}
				>
					<!-- Status badge -->
					<div class="absolute top-3 right-3 sm:top-4 sm:right-4">
						{#if cert.status === "in-progress"}
							<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/40">
								<span class="relative flex h-1.5 w-1.5">
									<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
									<span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-primary"></span>
								</span>
								In Progress
							</span>
						{:else}
							<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success border border-success/30">
								<svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
								Earned
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
					{#if cert.date}
						<p class="mt-3 text-xs text-text-tertiary">{cert.date}</p>
					{/if}
					{#if cert.status === "in-progress"}
						<div class="mt-4">
							<div class="flex items-center justify-between text-xs text-text-tertiary mb-1.5">
								<span>Progress</span>
								<span>Target: Q4 2026</span>
							</div>
							<div class="h-1.5 rounded-full bg-bg-tertiary overflow-hidden">
								<div class="h-full rounded-full bg-accent-primary w-[35%]"></div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
