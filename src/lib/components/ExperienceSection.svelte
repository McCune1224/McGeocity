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
				"Orchestrated security patching, system upgrades, and server migrations for clinical applications across 9 hospitals and 100+ outpatient locations on Linux and Windows Server, achieving zero unscheduled downtime and zero clinical impact",
				"Instituted ITIL Change Management framework encompassing risk assessment, security impact analysis, and documented rollback procedures for all production changes, reducing deployment incidents and ensuring audit-ready change records",
				"Directed full-scope Identity and Access Management (IAM) lifecycle—user provisioning, Role-Based Access Control (RBAC), and Privileged Access Management (PAM)—for clinical applications supporting thousands of healthcare end users",
				"Engineered PostgreSQL queries and Power Platform dashboards to analyze system performance metrics, surfacing optimization opportunities that improved application reliability and end-user experience",
				"Drove cross-functional system integrations with IT engineering teams, clinical stakeholders, and third-party vendors to resolve complex technical issues and deploy new features across the healthcare network",
				"Enforced HIPAA Security Rule compliance through security audits, vulnerability assessments, and remediation; strengthened data protection and access control standards across all managed applications",
			],
		},
		{
			period: "Jul 2023 — Sep 2024",
			role: "Help Desk Analyst",
			organization: "University of Rochester Medical Center",
			description: "Provided enterprise IT support for 26,000+ users, specializing in incident triage, access management, and knowledge base development.",
			highlights: [
				"Onboarded and trained incoming help desk agents on ITIL incident management, ServiceNow ticketing, HIPAA privacy requirements, and troubleshooting workflows, accelerating agent readiness and service quality",
				"Resolved escalated Tier 2 incidents including network outages, Active Directory authentication failures, system-wide application errors, and undocumented software defects, maintaining sub-15-minute average resolution time",
				"Authored 30+ ServiceNow knowledge base articles on system architectures, troubleshooting procedures, and escalation protocols; reduced repeat incident volume and improved first-call resolution rates",
			],
		},
		{
			period: "Jan 2021 — May 2022",
			role: "Computer Science Lab Manager",
			organization: "Concordia University Irvine",
			description: "Managed university computer science lab infrastructure serving 200+ students, with emphasis on system reliability and automated administration.",
			highlights: [
				"Architected and maintained Windows Server and Ubuntu LDAP infrastructure across 50+ lab workstations serving 200+ users; managed security patching, Group Policy Objects (GPOs), access controls, and endpoint protection",
				"Developed PowerShell, Python, and Bash automation scripts for secure account provisioning, software deployment, device configuration, and security monitoring, eliminating manual administrative overhead",
			],
		},
		{
			period: "Dec 2020 — May 2021",
			role: "Software Engineer Intern",
			organization: "Collectors",
			description: "Developed computer vision software for trading card identification and maintained CI/CD pipelines.",
			highlights: [
				"Engineered a Python/OpenCV computer vision application to detect and classify damage on 3,000+ collectible trading cards, automating quality assessment and replacing error-prone manual inspection processes",
				"Managed source control and CI/CD pipelines through Azure DevOps; designed a PostgreSQL relational database of trading card metadata to support automated identification and classification at scale",
			],
		},
		{
			period: "Jan 2018 — May 2022",
			role: "IT Lead Technician",
			organization: "Concordia University Irvine IT Department",
			description: "Led help desk operations and mentored team members on complex technical issues.",
			highlights: [
				"Led and mentored a team of technicians supporting 4,000+ students and faculty; triaged escalated help desk tickets, enforced service quality standards, and reduced average resolution time through coaching and process improvement",
				"Performed classroom hardware repairs, network connectivity troubleshooting and resolution, and audio-visual support for university events and fundraisers, ensuring reliable technology operations across campus",
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
