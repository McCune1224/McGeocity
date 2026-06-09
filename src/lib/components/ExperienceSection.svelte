<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";

	interface TimelineEntry {
		period: string;
		role: string;
		organization: string;
		description: string;
		highlights: string[];
	}

	const timeline: TimelineEntry[] = [
		{
			period: "Sep 2024 — Present",
			role: "Application Administrator",
			organization: "University of Rochester Medical Center",
			description: "Oversee enterprise application administration, system patching, identity lifecycle management, and infrastructure automation for 9 hospitals and 100+ outpatient facilities.",
			highlights: [
				"Maintain 99.9% uptime through proactive patching and system maintenance across 9 hospitals and 100+ outpatient locations",
				"Oversee identity lifecycle including user provisioning, RBAC, and privileged access management for clinical and business applications",
				"Implement ITIL change management with risk assessment, rollback procedures, and post-deployment validation",
				"Conduct disaster recovery testing and business continuity planning for critical systems",
				"Coordinate with third-party vendors for security assessments and service integrations",
			],
		},
		{
			period: "Jul 2023 — Sep 2024",
			role: "Help Desk Analyst",
			organization: "University of Rochester Medical Center",
			description: "Provided enterprise IT support for 26,000+ users, specializing in incident triage, access management, and knowledge base development.",
			highlights: [
				"Performed initial triage on security incidents, escalating per incident response protocols",
				"Resolved escalated tickets including account lockouts, MFA issues, and access violations with detailed audit trails",
				"Authored 30+ knowledge base articles, reducing average resolution time by over 40% and mean call time to under 15 minutes",
				"Onboarded and trained new team members on security best practices, access policies, and compliance requirements",
			],
		},
		{
			period: "Jan 2021 — May 2022",
			role: "Computer Science Lab Manager",
			organization: "Concordia University Irvine",
			description: "Managed university computer science lab infrastructure serving 200+ students, with emphasis on system reliability and automated administration.",
			highlights: [
				"Administered Windows Server and Ubuntu LDAP infrastructure with security hardening and patch management",
				"Developed automation scripts in PowerShell, Python, and Bash for account provisioning and security monitoring",
				"Managed Active Directory security policies, GPOs, and authentication mechanisms across lab environments",
			],
		},
		{
			period: "Dec 2020 — May 2021",
			role: "Software Engineer Intern",
			organization: "Collectors Universe",
			description: "Developed computer vision software for trading card identification and maintained CI/CD pipelines.",
			highlights: [
				"Built Python OpenCV software for automated trading card identification and classification",
				"Maintained and streamlined deployment pipelines via Azure DevOps",
				"Collaborated across teams to ensure code transparency and product scalability",
			],
		},
		{
			period: "Jan 2018 — May 2022",
			role: "IT Lead Technician",
			organization: "Concordia University Irvine IT Department",
			description: "Led help desk operations and mentored team members on complex technical issues.",
			highlights: [
				"Led and instructed team members on complex technical issues in help desk requests",
				"Delivered high-quality technical support with a 95%+ satisfaction rate across faculty and student help requests",
				"Developed documentation and training materials for emerging technologies, reducing repeat tickets by 30%",
			],
		},
	];
</script>

<section id="experience" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-content mx-auto">
		<SectionHeading
			title="Experience"
			subtitle=""
		/>

		<div class="mt-12 relative">
			<!-- Vertical timeline line -->
			<div class="absolute left-4 sm:left-6 top-2 bottom-2 w-0.5 bg-accent-primary/30"></div>

			<div class="space-y-10">
				{#each timeline as entry, i}
					<div class="relative pl-10 sm:pl-14">
						<!-- Timeline dot -->
						<div class="absolute left-[11px] sm:left-[19px] top-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-accent-primary z-10"></div>

						<!-- Card -->
						<div class="p-5 sm:p-6 rounded-lg border border-border-primary bg-bg-secondary hover:border-accent-primary/50 transition-colors duration-200">
							<div class="flex flex-col gap-1 mb-3">
								<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
									<h3 class="text-base sm:text-lg font-semibold text-text-primary">
										{entry.role}
									</h3>
									<span class="text-xs sm:text-sm font-medium text-accent-primary font-mono whitespace-nowrap">
										{entry.period}
									</span>
								</div>
								<p class="text-sm text-text-tertiary">{entry.organization}</p>
							</div>

							<p class="text-sm text-text-secondary leading-relaxed mb-3">
								{entry.description}
							</p>

							<ul class="space-y-1.5">
								{#each entry.highlights as highlight}
									<li class="flex items-start gap-2 text-sm text-text-secondary">
										<svg class="h-4 w-4 mt-0.5 flex-shrink-0 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
										{highlight}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
