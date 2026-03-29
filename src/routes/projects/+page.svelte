<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialTable from "$lib/components/industrial/IndustrialTable.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

	type Category = "All" | "Security/IAM" | "Automation/Scripting" | "Web Development" | "Infrastructure" | "Gaming";

	interface Project {
		name: string;
		description: string;
		tech: string;
		demo?: string;
		code?: string;
		categories: Category[];
	}

	const projects: Project[] = [
		{
			name: "Matrix Miles",
			description: "IoT project bridging fitness data with embedded hardware. Go backend with Strava OAuth, PostgreSQL, and REST API. Embedded client on MatrixPortal M4 with CircuitPython displaying running stats on LED matrix. Implements secure OAuth token handling and IoT device communication security.",
			tech: "Go, CircuitPython, PostgreSQL, Docker, Strava API",
			demo: "https://matrix-miles-production.up.railway.app",
			code: "https://github.com/McCune1224/matrix-miles",
			categories: ["Infrastructure", "Automation/Scripting"]
		},
		{
			name: "Betrayal Discord Bot",
			description: "Comprehensive Discord bot for managing Betrayal, a battle royale social deduction game. Features structured logging, async PostgreSQL batch writes, command audit trails for accountability, and dynamic channel management with role-based access controls and secure API handling.",
			tech: "Go, PostgreSQL, Docker, Discord API",
			demo: "https://github.com/McCune1224/betrayal",
			code: "https://github.com/McCune1224/betrayal",
			categories: ["Security/IAM", "Automation/Scripting"]
		},
		{
			name: "Eggbert",
			description: "RPG game in Godot where you play as Eggbert, an egg falsely accused of a crime. Journey through a prison system to escape and uncover secrets.",
			tech: "Godot, C#, Pixel Art",
			demo: "https://github.com/McCune1224/eggbert",
			code: "https://github.com/McCune1224/eggbert",
			categories: ["Gaming"]
		},
		{
			name: "Little_T Twitter Bot",
			description: "Machine Learning bot using Markov Chains, deployed via AWS Lambda with secure IAM role configurations. Real-time Twitter interaction using Twitter Account Activity API and Tweepy. Implements AWS security best practices including least-privilege access policies and encrypted environment variables.",
			tech: "Python, AWS Lambda, MongoDB, Twitter API",
			demo: "https://x.com/little_t_bot",
			code: "https://github.com/McCune1224/little-t",
			categories: ["Automation/Scripting", "Infrastructure"]
		},
		{
			name: "Kusa Data",
			description: "Web app using Start.gg GraphQL API to find Smash Bros Ultimate tournaments. Redis caching for optimal response times, player profile viewing with tournament history. Implements API security through rate limiting, input validation, and secure data handling practices.",
			tech: "TypeScript, Redis, GraphQL, Start.gg API",
			demo: "https://kusa-data.vercel.app/",
			code: "https://github.com/McCune1224/kusa-data",
			categories: ["Web Development", "Infrastructure"]
		},
		{
			name: "McGeocity",
			description: "This website! Personal portfolio built with SvelteKit implementing modern web security practices including Content Security Policy headers, secure build processes, and TypeScript type safety throughout.",
			tech: "SvelteKit, TypeScript, TailwindCSS",
			demo: "https://mcgeocity.vercel.app",
			code: "https://github.com/mccune1224/McGeocity",
			categories: ["Web Development"]
		}
	];

	const filters: Category[] = [
		"All",
		"Security/IAM",
		"Automation/Scripting",
		"Web Development",
		"Infrastructure",
		"Gaming"
	];

	let activeFilter = $state<Category>("All");

	const filteredProjects = $derived(
		activeFilter === "All"
			? projects
			: projects.filter((p) => p.categories.includes(activeFilter))
	);

	const categoryCounts = $derived(() => {
		const counts: Record<Category, number> = { All: projects.length } as Record<Category, number>;
		filters.slice(1).forEach((cat) => {
			counts[cat] = projects.filter((p) => p.categories.includes(cat)).length;
		});
		return counts;
	});

	const tableHeaders = ["Project", "Description", "Tech Stack", "Categories"];
	const tableRows = $derived(
		filteredProjects.map((p) => [
			p.name,
			p.description,
			p.tech,
			p.categories.join(", ")
		])
	);

function setFilter(filter: Category) {
	activeFilter = filter;
}
</script>

<svelte:head>
	<title>Projects | Alex McCune - Security & Development Portfolio</title>
	<meta name="description" content="Explore Alex McCune's cybersecurity and development projects. From IoT fitness tracking to Discord bots and security automation tools." />
	<meta name="keywords" content="Alex McCune Projects, Cybersecurity Projects, Go Projects, Infrastructure Security, Healthcare IT Projects" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://alexmccune.dev/projects" />

	<!-- Open Graph -->
	<meta property="og:title" content="Projects | Alex McCune" />
	<meta property="og:description" content="Explore Alex McCune's cybersecurity and development projects." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alexmccune.dev/projects" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Projects | Alex McCune" />
	<meta name="twitter:description" content="Explore Alex McCune's cybersecurity and development projects." />
</svelte:head>

<div class="projects-page">
	<!-- Header Panel -->
	<IndustrialPanel title="PROJECTS">
		<p class="intro-text">
			A collection of personal projects and experiments. Each project represents a learning
			journey and an attempt to solve real problems.
		</p>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Filter Panel -->
	<IndustrialPanel title="FILTER BY CATEGORY">
		<div class="filter-bar">
			{#each filters as filter}
				<button
					class="filter-btn {activeFilter === filter ? 'active' : ''}"
					onclick={() => setFilter(filter)}
					aria-pressed={activeFilter === filter}
				>
					<span class="filter-label">{filter.toUpperCase()}</span>
					<span class="filter-count">({categoryCounts()[filter]})</span>
				</button>
			{/each}
		</div>
		<div class="results-info">
			<span class="results-count">SHOWING {filteredProjects.length} OF {projects.length} PROJECTS</span>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Projects Table (Desktop) -->
	<div class="table-view">
		<IndustrialTable title="PROJECT MANIFEST" headers={tableHeaders} rows={tableRows} />
	</div>

	<IndustrialDivider />

	<!-- Project Cards (All Views) -->
	<IndustrialPanel title="PROJECT DETAILS">
		<div class="projects-grid">
			{#each filteredProjects as project (project.name)}
				<div class="project-card">
					<div class="project-header">
						<span class="project-name">{project.name}</span>
						<div class="project-categories">
							{#each project.categories as category}
								<span class="category-badge">{category}</span>
							{/each}
						</div>
					</div>
					<p class="project-desc">{project.description}</p>
					<div class="project-tech">
						<span class="tech-label">TECH:</span>
						<span class="tech-value">{project.tech}</span>
					</div>
					<div class="project-links">
						{#if project.demo}
							<IndustrialButton label="[ DEMO ]" href={project.demo} />
						{/if}
						{#if project.code}
							<IndustrialButton label="[ CODE ]" href={project.code} />
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</IndustrialPanel>
</div>

<style lang="scss">
	.projects-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.intro-text {
		color: #c9c9c9;
		line-height: 1.6;
		margin: 0;
	}

	/* Filter Bar Styles */
	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.filter-btn {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.5rem 0.75rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.8125rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		cursor: pointer;
		transition: all 0.15s ease;

		/* Raised state (default) */
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		color: #c9c9c9;

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

		&.active {
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
			color: #8b9a5b;
		}
	}

	.filter-label {
		white-space: nowrap;
	}

	.filter-count {
		color: #888888;
		font-size: 0.8125rem;
	}

	.filter-btn.active .filter-count {
		color: #8b9a5b;
	}

	.results-info {
		padding-top: 0.5rem;
		border-top: 1px solid #3a3a3a;
	}

	.results-count {
		font-size: 0.875rem;
		color: #888888;
		letter-spacing: 0.05em;
	}

	.table-view {
		@media (max-width: 768px) {
			display: none;
		}
	}

	.projects-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.project-card {
		padding: 1rem;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
		background: #252525;
		transition: opacity 0.2s ease, transform 0.2s ease;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.project-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.project-name {
		font-weight: bold;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #8b9a5b;
	}

	.project-categories {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.category-badge {
		display: inline-block;
		padding: 0.25rem 0.625rem;
		font-size: 0.8125rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: #d4a55b;
		background: #1a1a1a;
		border: 1px solid #3a3a3a;
	}

	.project-desc {
		color: #c9c9c9;
		font-size: 0.875rem;
		line-height: 1.6;
		margin: 0 0 0.75rem 0;
	}

	.project-tech {
		display: flex;
		gap: 0.5rem;
		font-size: 0.875rem;
		margin-bottom: 1rem;
	}

	.tech-label {
		color: #888888;
	}

	.tech-value {
		color: #d4a55b;
	}

	.project-links {
		display: flex;
		gap: 0.5rem;
	}

	/* Mobile Responsive */
	@media (max-width: 640px) {
		.filter-bar {
			gap: 0.375rem;
		}

		.filter-btn {
			padding: 0.375rem 0.5rem;
			font-size: 0.8125rem;
		}

		.project-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.filter-btn,
		.project-card {
			transition: none;
			animation: none;
		}
	}
</style>
