<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialStatCard from "$lib/components/industrial/IndustrialStatCard.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Alex McCune",
		"jobTitle": "Healthcare IT Infrastructure Specialist",
		"url": "https://alexmccune.dev",
		"sameAs": [
			"https://linkedin.com/in/mccune1224",
			"https://github.com/mccune1224"
		],
		"knowsAbout": ["Cybersecurity", "HIPAA Compliance", "Infrastructure Security"]
	};
</script>

<svelte:head>
	<title>Alex McCune | Healthcare IT Security Specialist | Rochester NY</title>
	<meta name="description" content="Alex McCune - Healthcare IT Infrastructure Specialist specializing in cybersecurity, HIPAA compliance, and infrastructure security. 3+ years protecting hospital networks across Rochester NY." />
	<meta name="keywords" content="Alex McCune Cybersecurity, Healthcare IT Security Specialist, Rochester NY Cybersecurity, HIPAA Compliance, Infrastructure Security" />
	<meta name="author" content="Alex McCune" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://alexmccune.dev/" />

	<!-- Open Graph -->
	<meta property="og:title" content="Alex McCune | Healthcare IT Security Specialist" />
	<meta property="og:description" content="Healthcare IT Infrastructure Specialist specializing in cybersecurity, HIPAA compliance, and infrastructure security. Based in Rochester NY." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alexmccune.dev/" />
	<meta property="og:site_name" content="Alex McCune" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Alex McCune | Healthcare IT Security Specialist" />
	<meta name="twitter:description" content="Healthcare IT Infrastructure Specialist specializing in cybersecurity, HIPAA compliance, and infrastructure security." />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
</svelte:head>

<div class="home-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<h1 class="hero-name">ALEX MCCUNE</h1>
			<p class="hero-title">Healthcare IT Infrastructure Specialist</p>
			<p class="hero-tagline">
				Securing Critical Healthcare Systems | HIPAA Compliance | Infrastructure Security
			</p>
			<p class="hero-summary">
				Cybersecurity professional specializing in healthcare IT infrastructure, 
				vulnerability management, and regulatory compliance. Proven track record 
				protecting sensitive patient data across enterprise hospital networks.
			</p>
		</div>
	</section>

	<IndustrialDivider />

	<!-- Stats Bar -->
	<IndustrialPanel title="EXPERIENCE HIGHLIGHTS">
		<div class="stats-grid">
			<IndustrialStatCard label="Years Experience" value="3+" accent="green" />
			<IndustrialStatCard label="Hospitals Secured" value="9" accent="green" />
			<IndustrialStatCard label="Facilities" value="100+" accent="green" />
			<IndustrialStatCard label="Security Incidents" value="Zero" accent="orange" />
			<IndustrialStatCard label="Certification" value="Security+" accent="green" />
			<IndustrialStatCard label="Education" value="BS CS" accent="green" />
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- About Me Section -->
	<IndustrialPanel title="ABOUT ME">
		<div class="about-content">
			<p class="about-intro">
				I'm a cybersecurity-focused IT professional based in Rochester, NY, with 3+ years of experience
				protecting critical healthcare infrastructure. My journey has taken me from system administration
				at the help desk level to managing application security across 9 hospitals and 100+ outpatient facilities.
			</p>
			<p class="about-story">
				Originally from Southern California, I made the cross-country move to Rochester in 2023, trading
				60-degree winters for actual seasons (and learning what real cold feels like). The move brought
				me closer to great friends and led to an opportunity at URMC where I've been able to dive deep
				into healthcare cybersecurity, HIPAA compliance, and infrastructure security.
			</p>
			<p class="about-focus">
				Currently focused on vulnerability management, IAM/RBAC implementation, and building secure
				automation solutions. When I'm not securing systems, you'll find me running, coding side projects,
				or exploring Rochester's food scene.
			</p>
			<div class="about-status">
				<div class="status-item">
					<span class="status-label">LOCATION:</span>
					<span class="status-value">Rochester, NY</span>
				</div>
				<div class="status-item">
					<span class="status-label">FOCUS:</span>
					<span class="status-value">Cybersecurity Pivot</span>
				</div>
			</div>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Featured Projects -->
	<IndustrialPanel title="FEATURED PROJECTS">
		<div class="projects-preview">
			<div class="project-card">
				<div class="project-header">
					<span class="project-name">Betrayal Discord Bot</span>
					<span class="project-categories">Security/IAM, Automation</span>
				</div>
				<p class="project-description">
					Discord bot for battle royale social deduction game. Features structured logging,
					async PostgreSQL batch writes, command audit trails for accountability, and
					role-based access controls with secure API handling.
				</p>
				<div class="project-tags">
					<span class="tag">Go</span>
					<span class="tag">PostgreSQL</span>
					<span class="tag">Discord API</span>
					<span class="tag">Security</span>
				</div>
			</div>

			<div class="project-card">
				<div class="project-header">
					<span class="project-name">Matrix Miles</span>
					<span class="project-categories">Infrastructure, IoT</span>
				</div>
				<p class="project-description">
					IoT project bridging fitness data with embedded hardware. Go backend with
					Strava OAuth, PostgreSQL, and REST API. Secure OAuth token handling and
					IoT device communication security.
				</p>
				<div class="project-tags">
					<span class="tag">Go</span>
					<span class="tag">IoT</span>
					<span class="tag">OAuth</span>
					<span class="tag">Embedded</span>
				</div>
			</div>
		</div>
		<div class="projects-link">
			<a href="/projects" class="view-all-link">[ VIEW ALL PROJECTS ]</a>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Call to Action -->
	<IndustrialPanel title="GET IN TOUCH">
		<div class="cta-section">
			<div class="cta-buttons">
				<a href="/experience" class="cta-link">VIEW EXPERIENCE</a>
				<a href="/projects" class="cta-link">VIEW PROJECTS</a>
			</div>
			<div class="social-link">
				<a
					href="https://linkedin.com/in/mccune1224"
					target="_blank"
					rel="noopener noreferrer"
					class="linkedin-link"
				>
					[ CONNECT ON LINKEDIN ]
				</a>
			</div>
		</div>
	</IndustrialPanel>
</div>

<style lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	// Hero Section
	.hero-section {
		padding: 3rem 1.5rem;
		background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		text-align: center;

		@media (max-width: 640px) {
			padding: 2rem 1rem;
		}
	}

	.hero-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.hero-name {
		font-size: clamp(2.5rem, 8vw, 4.5rem);
		font-weight: bold;
		letter-spacing: 0.1em;
		color: #c9c9c9;
		margin: 0 0 1rem 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.hero-title {
		font-size: clamp(1rem, 3vw, 1.5rem);
		color: #8b9a5b;
		font-weight: bold;
		letter-spacing: 0.05em;
		margin: 0 0 0.75rem 0;
		text-transform: uppercase;
	}

	.hero-tagline {
		font-size: clamp(0.875rem, 2vw, 1.125rem);
		color: #888888;
		letter-spacing: 0.05em;
		margin: 0 0 1.5rem 0;
	}

	.hero-summary {
		font-size: clamp(1.0625rem, 2.5vw, 1.25rem);
		color: #c9c9c9;
		line-height: 1.8;
		max-width: 700px;
		margin: 0 auto;
	}

	// About Section
	.about-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.about-intro,
	.about-story,
	.about-focus {
		font-size: 1.125rem;
		color: #c9c9c9;
		line-height: 1.8;
		margin: 0 0 1.25rem 0;
	}

	.about-intro {
		font-size: 1.1875rem;
		color: #e8e8e8;
	}

	.about-focus {
		margin-bottom: 1.5rem;
	}

	.about-status {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		padding: 1rem 1.25rem;
		background: #252525;
		border: 1px solid #3a3a3a;
		margin-top: 1rem;
	}

	.status-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 1.0625rem;
	}

	.status-label {
		color: #a0a0a0;
		font-weight: bold;
	}

	.status-value {
		color: #e0e0e0;
		font-weight: 600;
	}

	// Stats Grid
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 0.75rem;

		@media (max-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	// Projects Preview
	.projects-preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 1.5rem;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}

	.project-card {
		padding: 1.25rem;
		background: #252525;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.75rem;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.project-name {
		font-size: 1.25rem;
		color: #8b9a5b;
		font-weight: bold;
		letter-spacing: 0.02em;
	}

	.project-categories {
		font-size: 1rem;
		color: #a0a0a0;
		font-weight: 500;
	}

	.project-description {
		font-size: 1.125rem;
		color: #d8d8d8;
		line-height: 1.8;
		margin: 0 0 1rem 0;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-size: 0.9375rem;
		color: #b0b0b0;
		padding: 0.4375rem 0.875rem;
		background: #1a1a1a;
		border: 1px solid #3a3a3a;
		letter-spacing: 0.05em;
	}

	.project-categories {
		font-size: 0.875rem;
		color: #888888;
		font-weight: 500;
	}

	.project-description {
		font-size: 0.9375rem;
		color: #c9c9c9;
		line-height: 1.7;
		margin: 0 0 1rem 0;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-size: 0.8125rem;
		color: #888888;
		padding: 0.375rem 0.75rem;
		background: #1a1a1a;
		border: 1px solid #3a3a3a;
		letter-spacing: 0.05em;
	}

	.projects-link {
		text-align: center;
		padding-top: 0.5rem;
	}

	.view-all-link {
		font-size: 0.875rem;
		color: #8b9a5b;
		text-decoration: none;
		font-weight: bold;
		letter-spacing: 0.05em;
		transition: color 0.1s ease;

		&:hover {
			color: #9aaa6b;
			text-decoration: underline;
		}
	}

	// CTA Section
	.cta-section {
		text-align: center;
	}

	.cta-buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		max-width: 400px;
		margin: 0 auto 1.5rem auto;

		@media (max-width: 480px) {
			grid-template-columns: 1fr;
		}
	}

	.cta-link {
		display: block;
		width: 100%;
		min-height: 48px;
		padding: 0.875rem 1.5rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-weight: bold;
		font-size: 0.9375rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-align: center;
		text-decoration: none;
		color: #c9c9c9;
		cursor: pointer;
		transition: all 0.15s ease;
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);

		&:hover {
			border-color: #5a5a5a #2a2a2a #2a2a2a #5a5a5a;
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			color: #8b9a5b;
		}

		&:active {
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
			transform: translateY(1px);
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}
	}

	.social-link {
		padding-top: 0.5rem;
	}

	.linkedin-link {
		font-size: 0.875rem;
		color: #0077b5;
		text-decoration: none;
		font-weight: bold;
		letter-spacing: 0.05em;
		transition: color 0.1s ease;

		&:hover {
			color: #0099e6;
			text-decoration: underline;
		}
	}
</style>
