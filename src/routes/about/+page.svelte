<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

	interface TimelineEntry {
		period: string;
		role: string;
		focus: string;
	}

	interface DriveItem {
		title: string;
		description: string;
	}

	const timeline: TimelineEntry[] = [
		{
			period: "2024 - Present",
			role: "Application Administrator",
			focus: "Healthcare systems, security tooling, automation",
		},
		{
			period: "2023 - 2024",
			role: "IT Support Specialist",
			focus: "Help desk operations, system troubleshooting",
		},
		{
			period: "2023",
			role: "Relocation",
			focus: "Moved to Rochester, NY for tech opportunities",
		},
		{
			period: "2020 - 2023",
			role: "Self-Directed Learning",
			focus: "Programming, infrastructure, security fundamentals",
		},
	];

	const motivations: DriveItem[] = [
		{
			title: "Impact",
			description: "Building systems that protect real people's data and privacy",
		},
		{
			title: "Challenge",
			description: "The ever-evolving threat landscape keeps the work engaging",
		},
		{
			title: "Community",
			description: "Contributing to open source and sharing knowledge",
		},
	];
</script>

<svelte:head>
	<title>About | Alex McCune - Healthcare IT Security Specialist</title>
	<meta name="description" content="Learn about Alex McCune's journey into cybersecurity and healthcare IT infrastructure. Discover what drives his passion for protecting critical systems and patient data." />
	<meta name="keywords" content="Alex McCune, Cybersecurity Professional, Healthcare IT Security, Rochester NY, Infrastructure Security, HIPAA Compliance" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://alexmccune.dev/about" />

	<!-- Open Graph -->
	<meta property="og:title" content="About | Alex McCune" />
	<meta property="og:description" content="Learn about Alex McCune's journey into cybersecurity and healthcare IT infrastructure." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alexmccune.dev/about" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="About | Alex McCune" />
	<meta name="twitter:description" content="Learn about Alex McCune's journey into cybersecurity and healthcare IT infrastructure." />
</svelte:head>

<div class="about-page">
	<!-- Professional Bio -->
	<IndustrialPanel title="PROFESSIONAL PROFILE">
		<div class="bio-content">
			<p>
				My path into cybersecurity began with a foundation in IT support and a growing
				fascination with how systems can be both powerful and vulnerable. What started as
				troubleshooting user issues evolved into a deeper interest in securing the
				infrastructure behind those systems—particularly in healthcare, where the stakes
				couldn't be higher.
			</p>
			<p>
				Relocating from California to New York in 2023 pushed me to adapt quickly and
				build my career in a new environment. I progressed from help desk operations to
				application administration, where I now work directly with healthcare systems,
				implementing security controls and automating processes to reduce risk. This
				hands-on experience has solidified my focus on defensive security and operational
				excellence.
			</p>
			<p>
				I'm currently pursuing Security+ certification and actively building projects that
				demonstrate my capabilities in vulnerability assessment, log analysis, and security
				automation. My goal is to contribute to a security team where I can grow while
				helping protect critical systems from evolving threats.
			</p>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Career Timeline -->
	<IndustrialPanel title="CAREER TIMELINE">
		<div class="timeline">
			{#each timeline as entry, i}
				<div class="timeline-entry">
					<div class="timeline-marker">[{i + 1}]</div>
					<div class="timeline-content">
						<div class="timeline-period">{entry.period}</div>
						<div class="timeline-role">{entry.role}</div>
						<div class="timeline-focus">{entry.focus}</div>
					</div>
				</div>
			{/each}
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- What Drives Me -->
	<IndustrialPanel title="WHAT DRIVES ME">
		<div class="motivations">
			{#each motivations as item}
				<div class="motivation-item">
					<div class="motivation-title">{item.title}</div>
					<p class="motivation-text">{item.description}</p>
				</div>
			{/each}
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Quick Info -->
	<IndustrialPanel title="CONTACT INFORMATION">
		<div class="contact-grid">
			<div class="contact-row">
				<span class="contact-label">LOCATION:</span>
				<span class="contact-value">Rochester, NY</span>
			</div>
			<div class="contact-row">
				<span class="contact-label">FOCUS:</span>
				<span class="contact-value">Defensive Security / Healthcare IT</span>
			</div>
			<div class="contact-row">
				<span class="contact-label">STATUS:</span>
				<span class="contact-value accent-green">Open to Opportunities</span>
			</div>
		</div>
	</IndustrialPanel>
</div>

<style lang="scss">
	.about-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.bio-content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		p {
			color: #c9c9c9;
			line-height: 1.8;
			margin: 0;
		}
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.timeline-entry {
		display: flex;
		gap: 1rem;
		align-items: flex-start;

		&:not(:last-child) {
			padding-bottom: 1.5rem;
			border-bottom: 1px solid #3a3a3a;
		}
	}

	.timeline-marker {
		color: #8b9a5b;
		font-weight: bold;
		font-size: 0.875rem;
		flex-shrink: 0;
		min-width: 3rem;
	}

	.timeline-content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.timeline-period {
		color: #888888;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.timeline-role {
		color: #c9c9c9;
		font-weight: bold;
		font-size: 1rem;
	}

	.timeline-focus {
		color: #8b9a5b;
		font-size: 0.875rem;
	}

	.motivations {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.motivation-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		&:not(:last-child) {
			padding-bottom: 1.5rem;
			border-bottom: 1px solid #3a3a3a;
		}
	}

	.motivation-title {
		color: #8b9a5b;
		font-weight: bold;
		font-size: 0.9375rem;
	}

	.motivation-text {
		color: #c9c9c9;
		line-height: 1.7;
		margin: 0;
		font-size: 0.9375rem;
	}

	.contact-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.contact-row {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;

		@media (max-width: 640px) {
			flex-direction: column;
			gap: 0.25rem;
		}
	}

	.contact-label {
		color: #888888;
		min-width: 100px;
		flex-shrink: 0;
	}

	.contact-value {
		color: #c9c9c9;

		&.accent-green {
			color: #8b9a5b;
		}
	}
</style>
