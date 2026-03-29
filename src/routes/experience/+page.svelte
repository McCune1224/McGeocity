<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";

	// Skill categories with badges
	const skillCategories = [
		{
			title: "Security & Compliance",
			skills: [
				"HIPAA Security Rule",
				"NIST CSF",
				"Vulnerability Management",
				"IAM/RBAC/PAM",
				"Risk Assessment",
				"Security Auditing",
				"Incident Response",
				"Disaster Recovery",
				"SIEM"
			]
		},
		{
			title: "Systems & Infrastructure",
			skills: [
				"Windows Server 2016-2022",
				"Linux (Ubuntu)",
				"Active Directory",
				"Azure AD",
				"LDAP",
				"VMware",
				"O365",
				"ServiceNow",
				"ITIL"
			]
		},
		{
			title: "Networking & Cloud",
			skills: [
				"TCP/IP",
				"DNS",
				"DHCP",
				"VLANs",
				"Firewall Concepts",
				"Network Segmentation",
				"AWS (Lambda, EC2, S3)",
				"Docker",
				"Git"
			]
		},
		{
			title: "Scripting & Tools",
			skills: [
				"PowerShell",
				"Python",
				"Bash",
				"Go",
				"PostgreSQL",
				"SQL",
				"REST APIs",
				"Wireshark",
				"Nmap"
			]
		}
	];

	// Work experience data
	const experiences = [
		{
			title: "Application Administrator",
			company: "University of Rochester Medical Center",
			location: "Rochester, NY",
			period: "Sep 2024 - Present",
			description: [
				"Execute security patching and vulnerability management on Linux and Windows servers across 9 hospitals and 100+ outpatient locations; maintain HIPAA-compliant infrastructure with zero security incidents",
				"Manage identity and access management (IAM) lifecycle including user provisioning/de-provisioning, RBAC, and privileged access management (PAM) for clinical and business applications",
				"Implement ITIL Change Management processes with security-focused risk assessment, ensuring all production changes include rollback procedures and security impact analysis",
				"Conduct security audits and compliance verification for HIPAA Security Rule requirements, supporting annual risk assessments and regulatory examinations",
				"Perform disaster recovery testing and business continuity planning, validating data integrity and system availability for critical healthcare applications",
				"Analyze system security metrics via PostgreSQL and SIEM tooling to identify anomalies, optimize security controls, and enhance threat detection capabilities",
				"Communicate and coordinate with third-party vendors and service providers to manage security assessments, and ensure contracted services meet organizational security standards and HIPAA requirements"
			]
		},
		{
			title: "Help Desk Analyst",
			company: "University of Rochester Medical Center",
			location: "Rochester, NY",
			period: "Jul 2023 - Sep 2024",
			description: [
				"Performed initial triage on incidents and quick resolutions, escalating to necessary teams per incident response protocols",
				"Resolved escalated security-related tickets including account lockouts, MFA issues, and access violations while maintaining detailed audit trails",
				"Created 30+ knowledge base articles on procedures, troubleshooting steps, and escalation protocols, helping reduce mean call time to sub 15 minutes",
				"Trained new hires on security awareness, password policies, and HIPAA privacy requirements, fostering a culture of security consciousness"
			]
		},
		{
			title: "Computer Science Lab Manager",
			company: "Concordia University Irvine",
			location: "Irvine, CA",
			period: "Jan 2021 - May 2022",
			description: [
				"Administered Windows Server and Ubuntu LDAP infrastructure, implementing security hardening, patch management, and access controls",
				"Developed automation scripts in PowerShell, Python, and Bash for secure account provisioning, software deployment, and security monitoring",
				"Managed Active Directory security policies, group policy objects (GPOs), and user authentication mechanisms"
			]
		}
	];
</script>

<svelte:head>
	<title>Experience | Alex McCune - Healthcare IT Infrastructure Specialist</title>
	<meta name="description" content="Alex McCune's professional experience in healthcare IT security, infrastructure management, and HIPAA compliance. 3+ years protecting critical hospital systems across 9 facilities." />
	<meta name="keywords" content="Alex McCune Experience, Healthcare IT Security Specialist, Rochester NY Cybersecurity, HIPAA Compliance, Infrastructure Security, Vulnerability Management" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://alexmccune.dev/experience" />

	<!-- Open Graph -->
	<meta property="og:title" content="Experience | Alex McCune" />
	<meta property="og:description" content="Professional experience in healthcare IT security, infrastructure management, and HIPAA compliance. 3+ years protecting hospital systems." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alexmccune.dev/experience" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Experience | Alex McCune" />
	<meta name="twitter:description" content="Professional experience in healthcare IT security, infrastructure management, and HIPAA compliance." />
</svelte:head>

<div class="experience-page">
	<!-- Header Section -->
	<header class="resume-header">
		<div class="header-content">
			<div class="header-top-row">
				<div class="header-title">
					<h1 class="name">ALEX MCCUNE</h1>
					<p class="professional-title">Healthcare IT Infrastructure Specialist</p>
				</div>
				<div class="download-section">
					<IndustrialButton label="[ Download Resume ]" href="/resume.pdf" download="Alex_McCune_Resume.pdf" />
				</div>
			</div>
			
			<div class="contact-grid">
				<div class="contact-item">
					<span class="contact-label">Location:</span>
					<span class="contact-value">Rochester, NY</span>
				</div>
				<div class="contact-item">
					<span class="contact-label">Email:</span>
					<a href="mailto:alexmccune1224@gmail.com" class="contact-value">alexmccune1224@gmail.com</a>
				</div>
				<div class="contact-item">
					<span class="contact-label">Web:</span>
					<a href="https://alexmccune.dev" target="_blank" class="contact-value">alexmccune.dev</a>
				</div>
				<div class="contact-item">
					<span class="contact-label">LinkedIn:</span>
					<a href="https://linkedin.com/in/mccune1224" target="_blank" class="contact-value">linkedin.com/in/mccune1224</a>
				</div>
			</div>
		</div>
	</header>

	<IndustrialDivider />

	<!-- Professional Summary -->
	<section class="summary-section">
		<IndustrialPanel title="Professional Summary">
			<p class="summary-text">
				Healthcare IT Infrastructure Specialist with 3+ years of experience protecting critical systems and patient data across 9 hospitals and 100+ outpatient facilities. Deep expertise in HIPAA compliance, vulnerability management, IAM/RBAC, incident response, and risk assessment. Proven track record maintaining secure, highly available systems with zero security incidents while supporting regulatory audits and disaster recovery operations.
			</p>
		</IndustrialPanel>
	</section>

	<IndustrialDivider />

	<!-- Technical Skills -->
	<section class="skills-section">
		<IndustrialPanel title="Technical Skills">
			<div class="skills-grid">
				{#each skillCategories as category}
					<div class="skill-category">
						<h3 class="category-title">{category.title}</h3>
						<div class="skill-badges">
							{#each category.skills as skill}
								<span class="skill-badge">{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</IndustrialPanel>
	</section>

	<IndustrialDivider />

	<!-- Professional Experience -->
	<section class="experience-section">
		<IndustrialPanel title="Professional Experience">
			<div class="timeline">
				{#each experiences as exp, index}
					<div class="timeline-item">
						<div class="timeline-marker">
							<div class="marker-dot"></div>
							{#if index !== experiences.length - 1}
								<div class="marker-line"></div>
							{/if}
						</div>
						<div class="timeline-content">
							<div class="job-header">
								<h3 class="job-title">{exp.title}</h3>
								<span class="job-company">{exp.company}</span>
								<span class="job-location">{exp.location}</span>
								<span class="job-period">{exp.period}</span>
							</div>
							<ul class="job-duties">
								{#each exp.description as duty}
									<li>{duty}</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</IndustrialPanel>
	</section>

	<IndustrialDivider />

	<!-- Education & Certifications -->
	<section class="education-section">
		<IndustrialPanel title="Education & Certifications">
			<div class="education-grid">
				<div class="education-item">
					<h3 class="degree">Bachelor of Science in Computer Science</h3>
					<p class="school">Concordia University Irvine — Irvine, CA</p>
					<p class="period">Aug 2017 - May 2022</p>
				</div>
				
				<div class="achievements">
					<h3 class="achievements-title">Awards & Certifications</h3>
					<div class="achievement-badges">
						<span class="achievement-badge">Computer Science Student of the Year 2022</span>
						<span class="achievement-badge">CompTIA Security+</span>
						<span class="achievement-badge">HIPAA Privacy & Security Training</span>
						<span class="achievement-badge">ITIL v4 Foundation</span>
					</div>
				</div>
			</div>
		</IndustrialPanel>
	</section>
</div>

<style lang="scss">
	.experience-page {
		max-width: 1000px;
		margin: 0 auto;
		font-family: var(--font-mono, "Courier New", monospace);
	}

	/* Header Section */
	.resume-header {
		background: linear-gradient(180deg, #2d2d2d 0%, #252525 100%);
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		padding: 2rem;
		margin-bottom: 1.5rem;
	}

	.header-top-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.header-title {
		flex: 1;
		min-width: 280px;
	}

	.download-section {
		flex-shrink: 0;
		width: 220px;
	}

	.name {
		font-size: 2.5rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #8b9a5b;
		margin: 0 0 0.5rem 0;
		line-height: 1.2;
	}

	.professional-title {
		font-size: 1.25rem;
		font-weight: bold;
		color: #c9c9c9;
		margin: 0 0 1.5rem 0;
		letter-spacing: 0.03em;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 0.75rem;
	}

	.contact-item {
		font-size: 1rem;
		display: flex;
		gap: 0.5rem;
	}

	.contact-label {
		color: #888888;
		font-weight: bold;
		min-width: 80px;
	}

	a.contact-value {
		color: #8b9a5b;
		text-decoration: none;

		&:hover {
			color: #a5b56f;
			text-decoration: underline;
		}
	}

	span.contact-value {
		color: #c9c9c9;
	}

	/* Summary Section */
	.summary-section {
		margin-bottom: 1.5rem;
	}

	.summary-text {
		font-size: 1.0625rem;
		line-height: 1.7;
		color: #c9c9c9;
		margin: 0;
	}

	/* Skills Section */
	.skills-section {
		margin-bottom: 1.5rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.skill-category {
		background: #252525;
		border: 1px solid #3a3a3a;
		padding: 1rem;
	}

	.category-title {
		font-size: 1rem;
		font-weight: bold;
		color: #8b9a5b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 0.75rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #3a3a3a;
	}

	.skill-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-badge {
		display: inline-block;
		padding: 0.4rem 0.75rem;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		border: 1px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		color: #c9c9c9;
		font-size: 0.8125rem;
		font-family: var(--font-mono, "Courier New", monospace);
		transition: all 0.1s ease;

		&:hover {
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			border-color: #5a5a5a #2a2a2a #2a2a2a #5a5a5a;
			color: #8b9a5b;
		}
	}

	/* Experience Section - Timeline */
	.experience-section {
		margin-bottom: 1.5rem;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.timeline-item {
		display: flex;
		gap: 1rem;
	}

	.timeline-marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 24px;
		flex-shrink: 0;
	}

	.marker-dot {
		width: 16px;
		height: 16px;
		background: #8b9a5b;
		border: 2px solid #1a1a1a;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.marker-line {
		width: 2px;
		flex: 1;
		background: linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 100%);
		margin-top: 0.5rem;
	}

	.timeline-content {
		flex: 1;
		background: #252525;
		border: 1px solid #3a3a3a;
		padding: 1rem 1.25rem;
	}

	.job-header {
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #3a3a3a;
	}

	.job-title {
		font-size: 1.125rem;
		font-weight: bold;
		color: #8b9a5b;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		margin: 0 0 0.5rem 0;
	}

	.job-company {
		display: block;
		font-size: 1rem;
		font-weight: bold;
		color: #c9c9c9;
		margin-bottom: 0.25rem;
	}

	.job-location {
		font-size: 0.9375rem;
		color: #888888;
		margin-right: 1rem;
	}

	.job-period {
		font-size: 0.9375rem;
		color: #8b9a5b;
		font-weight: bold;
	}

	.job-duties {
		margin: 0;
		padding-left: 1.25rem;
	}

	.job-duties li {
		font-size: 0.9375rem;
		line-height: 1.7;
		color: #c9c9c9;
		margin-bottom: 0.5rem;
	}

	.job-duties li::marker {
		color: #8b9a5b;
	}

	/* Education Section */
	.education-section {
		margin-bottom: 1.5rem;
	}

	.education-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.education-item {
		background: #252525;
		border: 1px solid #3a3a3a;
		padding: 1rem 1.25rem;
	}

	.degree {
		font-size: 1.0625rem;
		font-weight: bold;
		color: #8b9a5b;
		margin: 0 0 0.5rem 0;
	}

	.school {
		font-size: 1rem;
		color: #c9c9c9;
		margin: 0 0 0.25rem 0;
	}

	.period {
		font-size: 0.9375rem;
		color: #888888;
		margin: 0;
	}

	.achievements-title {
		font-size: 1rem;
		font-weight: bold;
		color: #c9c9c9;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 0.75rem 0;
	}

	.achievement-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.achievement-badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		border: 1px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		color: #c9c9c9;
		font-size: 0.875rem;
		font-weight: bold;
		font-family: var(--font-mono, "Courier New", monospace);
		transition: all 0.1s ease;

		&:hover {
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			border-color: #5a5a5a #2a2a2a #2a2a2a #5a5a5a;
			color: #8b9a5b;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.name {
			font-size: 1.75rem;
		}

		.professional-title {
			font-size: 1.0625rem;
		}

		.header-top-row {
			flex-direction: column;
			gap: 1rem;
		}

		.download-section {
			width: 100%;
		}

		.contact-grid {
			grid-template-columns: 1fr;
		}

		.contact-item {
			flex-direction: column;
			gap: 0.25rem;
		}

		.contact-label {
			min-width: auto;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.timeline-item {
			gap: 0.75rem;
		}

		.timeline-marker {
			width: 20px;
		}

		.marker-dot {
			width: 12px;
			height: 12px;
		}

		.job-header {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		.job-title {
			font-size: 1rem;
		}

		.job-location,
		.job-period {
			font-size: 0.875rem;
		}
	}

	/* Print Styles */
	@media print {
		.experience-page {
			max-width: 100%;
		}

		.resume-header,
		.skill-category,
		.timeline-content,
		.education-item {
			break-inside: avoid;
		}
	}
</style>
