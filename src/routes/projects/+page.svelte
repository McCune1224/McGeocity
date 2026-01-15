<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialTable from "$lib/components/industrial/IndustrialTable.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";
	import Socials from "$lib/components/Socials.svelte";

	const projects = [
		{
			name: "Gather",
			description: "All in one productivity app for scheduling, todos, and note taking",
			tech: "Go, HTMX, SQLite, TailwindCSS",
			demo: "https://github.com/mccune1224/Gather",
			code: "https://github.com/mccune1224/Gather"
		},
		{
			name: "Betrayal",
			description: "Discord bot for Mafia-style game with complex role management",
			tech: "Go, PostgreSQL, Discord API",
			demo: "https://github.com/mccune1224/betrayal",
			code: "https://github.com/mccune1224/betrayal"
		},
		{
			name: "Gamba",
			description: "Twitch stream viewer points gambling system",
			tech: "TypeScript, Node.js, Twitch API",
			demo: "https://github.com/mccune1224/gamba",
			code: "https://github.com/mccune1224/gamba"
		},
		{
			name: "Resume Tailor",
			description: "AI-powered resume customization tool for job applications",
			tech: "Python, OpenAI API, FastAPI",
			demo: "https://github.com/mccune1224/resume-tailor",
			code: "https://github.com/mccune1224/resume-tailor"
		},
		{
			name: "McGeocity",
			description: "This website! Personal portfolio with Half-Life industrial aesthetic",
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

	<IndustrialDivider />

	<div class="socials-section">
		<Socials />
	</div>
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

	.socials-section {
		display: flex;
		justify-content: center;
		padding: 1rem 0;
	}
</style>
