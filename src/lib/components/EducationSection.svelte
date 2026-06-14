<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";

	interface EducationEntry {
		degree: string;
		school: string;
		period: string;
		details: string[];
	}

	const education: EducationEntry[] = [
		{
			degree: "Bachelor of Science, Computer Science",
			school: "Concordia University Irvine",
			period: "Aug 2017 — May 2022",
			details: [
				"Computer Science Student of the Year — Graduating Class of 2022",
				"Coursework in systems programming, network administration, database management, and software engineering",
			],
		},
	];
</script>

<section id="education" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
	<div class="max-w-content mx-auto">
		<SectionHeading
			title="Education"
			subtitle=""
		/>

		<div class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each education as entry}
				<div class="p-5 sm:p-6 rounded-lg border border-border-primary bg-bg-primary hover:border-accent-primary/50 transition-colors duration-200">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
								<path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
							</svg>
						</div>
						<div class="flex-1 min-w-0">
							<h3 class="text-base sm:text-lg font-semibold text-text-primary">
								{entry.degree}
							</h3>
							<p class="text-sm text-text-tertiary mt-0.5">{entry.school}</p>
							<p class="text-sm text-accent-primary font-mono mt-1">{entry.period}</p>
							<ul class="mt-3 space-y-1.5">
								{#each entry.details as detail}
									<li class="flex items-start gap-2 text-sm text-text-secondary">
										<svg class="h-4 w-4 mt-0.5 flex-shrink-0 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
										{detail}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
