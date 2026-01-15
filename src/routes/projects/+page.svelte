<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialTable from "$lib/components/industrial/IndustrialTable.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

	const projects = [
		{
			name: "Matrix Miles",
			description: "IoT project bridging fitness data with embedded hardware. Go backend with Strava OAuth, PostgreSQL, and REST API. Embedded client on MatrixPortal M4 with CircuitPython displaying running stats on LED matrix.",
			tech: "Go, CircuitPython, PostgreSQL, Docker, Strava API",
			demo: "https://matrix-miles-production.up.railway.app",
			code: "https://github.com/McCune1224/matrix-miles"
		},
		{
			name: "Betrayal Discord Bot",
			description: "Comprehensive Discord bot for managing Betrayal, a battle royale social deduction game. Features structured logging, async PostgreSQL batch writes, command audit trails, and dynamic channel management.",
			tech: "Go, PostgreSQL, Docker, Discord API",
			demo: "https://github.com/McCune1224/betrayal",
			code: "https://github.com/McCune1224/betrayal"
		},
		{
			name: "Eggbert",
			description: "RPG game in Godot where you play as Eggbert, an egg falsely accused of a crime. Journey through a prison system to escape and uncover secrets.",
			tech: "Godot, C#, Pixel Art",
			demo: "https://github.com/McCune1224/eggbert",
			code: "https://github.com/McCune1224/eggbert"
		},
		{
			name: "Little_T Twitter Bot",
			description: "Machine Learning bot using Markov Chains, deployed via AWS Lambda. Real-time Twitter interaction using Twitter Account Activity API and Tweepy.",
			tech: "Python, AWS Lambda, MongoDB, Twitter API",
			demo: "https://x.com/little_t_bot",
			code: "https://github.com/McCune1224/little-t"
		},
		{
			name: "Kusa Data",
			description: "Web app using Start.gg GraphQL API to find Smash Bros Ultimate tournaments. Redis caching for optimal response times, player profile viewing with tournament history.",
			tech: "TypeScript, Redis, GraphQL, Start.gg API",
			demo: "https://kusa-data.vercel.app/",
			code: "https://github.com/McCune1224/kusa-data"
		},
		{
			name: "McGeocity",
			description: "This website! Personal portfolio built with SvelteKit.",
			tech: "SvelteKit, TypeScript, TailwindCSS",
			demo: "https://mcgeocity.vercel.app",
			code: "https://github.com/mccune1224/McGeocity"
		}
	];

	const tableHeaders = ["Project", "Description", "Tech Stack"];
	const tableRows = projects.map((p) => [p.name, p.description, p.tech]);
</script>

<div class="projects-page">
	<!-- Header Panel -->
	<IndustrialPanel title="PROJECTS">
		<p class="intro-text">
			A collection of personal projects and experiments. Each project represents a learning
			journey and an attempt to solve real problems.
		</p>
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
			{#each projects as project}
				<div class="project-card">
					<div class="project-header">
						<span class="project-name">{project.name}</span>
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
	}

	.project-header {
		margin-bottom: 0.75rem;
	}

	.project-name {
		font-weight: bold;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #8b9a5b;
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
		font-size: 0.75rem;
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
</style>
