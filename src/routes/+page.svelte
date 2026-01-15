<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";
	import Socials from "$lib/components/Socials.svelte";
</script>

<div class="home-page">
	<!-- Welcome Panel -->
	<IndustrialPanel title="WELCOME">
		<div class="welcome-content">
			<h1 class="welcome-title">McGeocity Terminal</h1>
			<p class="welcome-text">
				Welcome to my personal portfolio and digital workspace. I'm <span class="accent">Alex McCune</span>,
				currently based in <span class="accent">Rochester, NY</span> working as an
				application/system administrator.
			</p>
			<p class="welcome-text secondary">
				When not administering systems, I enjoy programming, board games, video games,
				rock climbing, and running.
			</p>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Navigation Grid -->
	<IndustrialPanel title="NAVIGATION">
		<div class="nav-grid">
			<IndustrialButton label="[ ABOUT ME ]" href="/about" />
			<IndustrialButton label="[ PROJECTS ]" href="/projects" />
			<IndustrialButton label="[ MUSIC ]" href="/music" />
			<IndustrialButton label="[ HEALTHCHECK ]" href="/healthcheck" />
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Quick Facts -->
	<IndustrialPanel title="SYSTEM INFO">
		<div class="facts-list">
			<div class="fact-item">
				<span class="fact-label">STATUS:</span>
				<span class="fact-value accent">ONLINE</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">ROLE:</span>
				<span class="fact-value">Full Stack System & Application Administrator</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">INTERESTS:</span>
				<span class="fact-value">Automation, Open Source, Rock Climbing, Running</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">LOCATION:</span>
				<span class="fact-value">Rochester, NY</span>
			</div>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Socials -->
	<div class="socials-section">
		<Socials />
	</div>
</div>

<style lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.welcome-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.welcome-title {
		font-size: 1.5rem;
		color: #8b9a5b;
		margin: 0;
	}

	.welcome-text {
		color: #c9c9c9;
		line-height: 1.6;
		margin: 0;

		&.secondary {
			color: #888888;
			font-size: 0.875rem;
		}
	}

	.accent {
		color: #8b9a5b;
		font-weight: bold;
	}

	.nav-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	.facts-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.fact-item {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;

		@media (max-width: 640px) {
			flex-direction: column;
			gap: 0.25rem;
		}
	}

	.fact-label {
		color: #888888;
		min-width: 100px;
		flex-shrink: 0;
	}

	.fact-value {
		color: #c9c9c9;

		&.accent {
			color: #8b9a5b;
		}
	}

	.socials-section {
		display: flex;
		justify-content: center;
		padding: 1rem 0;
	}
</style>
