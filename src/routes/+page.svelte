<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";
</script>

<div class="home-page">
	<!-- Welcome Panel -->
	<IndustrialPanel title="WELCOME">
		<div class="welcome-content">
			<p class="welcome-text">
				Welcome to my personal portfolio and digital workspace. I'm <span
					class="accent">Alex McCune</span
				>, currently based in <span class="accent">Rochester, NY</span> working as
				an application/system administrator.
			</p>
			<p class="welcome-text secondary">
				When I'm not working you can find me running, coding, reading, or going
				down an eclectic music rabbit hole.
			</p>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- About Me -->
	<IndustrialPanel title="ABOUT ME">
		<div class="about-content">
			<p class="about-text">
				Originally from <span class="accent">Carlsbad, California</span>, I made
				the cross-country move to Rochester in May 2023. It's been quite the
				adventure adapting to four actual seasons (turns out "cold" isn't just
				60 degrees with a light breeze).
			</p>
			<p class="about-text">
				The move brought me closer to some great friends I've known for years,
				and led me to an awesome job where I get to work on interesting
				technical challenges every day. Rochester has become home, and I'm
				excited to keep exploring everything the city and the Northeast have to
				offer.
			</p>
			<p class="about-text">
				This year I'm focused on leveling up my running, traveling more, and
				continuing to build cool things. Always happy to connect!
			</p>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Navigation Grid -->
	<IndustrialPanel title="NAVIGATION">
		<div class="nav-grid">
			<IndustrialButton label="[ PROJECTS ]" href="/projects" />
			<IndustrialButton label="[ MUSIC ]" href="/music" />
			<IndustrialButton label="[ HEALTHCHECK ]" href="/healthcheck" />
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Quick Facts -->
	<IndustrialPanel title="QUICK INFO">
		<div class="facts-list">
			<div class="fact-item">
				<span class="fact-label">STATUS:</span>
				<span class="fact-value accent">ONLINE</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">ROLE:</span>
				<span class="fact-value">System Administrator</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">INTERESTS:</span>
				<span class="fact-value">Running, Coding, Music, Travel</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">ORIGIN:</span>
				<span class="fact-value">Carlsbad, CA</span>
			</div>
			<div class="fact-item">
				<span class="fact-label">LOCATION:</span>
				<span class="fact-value">Rochester, NY</span>
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

	.welcome-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
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

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.about-text {
		color: #c9c9c9;
		line-height: 1.7;
		margin: 0;
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
</style>
