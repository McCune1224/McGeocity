<script lang="ts">
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";
	import Socials from "$lib/components/Socials.svelte";

	const blogEntries = [
		{
			id: "intro",
			date: "02/04/2025",
			title: "Introduction",
			content:
				"Well to go into more detail about myself then... Hi! I've been in Rochester since May 2023 but I grew up most of my life on the West Coast in Carlsbad California (life is rad in Carlsbad). It's been a bit of an interesting experience so far living in Rochester as it is such a different lifestyle for me. For one, \"Cold\" for me used to be 60, and a brief 2 minutes of wind at most for the day. Moving to Rochester, you'd be lucky to see 60 on a day that wasn't in Summer.",
		},
		{
			id: "the-move",
			date: "02/04/2025",
			title: "The Big Move",
			content:
				"I didn't have any intentions of moving out of California, however I was struggling to find work after my undergrad and my old roommates who moved out here and mentioned they had a room available if I ever wanted. Pondering on it for a bit, I decided to pack my things and fly across to country to a State I've never been to, let alone the city I would be living in.",
		},
		{
			id: "tough-times",
			date: "02/04/2025",
			title: "Tough Times",
			content:
				"So far it has been a mixed bag I'd say, on one hand I got to reconnect with two very close friends to me who I have known for 6+ years now, but on the other life for me was stagnant pretty much up until I got my most recent job in late 2024. Before my current job I was working a help-desk / call center IT job that was miserable. It ate up a lot of my day, the commute was generally an hour at minimum due to me not having a car and public transit being a coin flip if things were going to be on time or not, plus there was no clear path ahead to know when it would end which did not help. Slap on some cold weather and gray skies for half of the year and thats a nice little recipie to get someone feeling down for a long while...",
		},
		{
			id: "brighter-outlook",
			date: "02/04/2025",
			title: "A Brighter Outlook",
			content:
				"Thankfully I have escaped that pit I was in and life has taken a positive turn. The end of Winter is (hopefully) near and with that I want to jumpstart my life again now that I have a lot more time, money, and energy back on my side. I want to get really into running this year, as well as hopefully travel more now that this is an actual a job where I'm not being worked like a horse 24/7.\n\nAnywho, I'll add more of these entries as time goes on (hopefully), until then take care :)",
		},
	];

	let expandedEntry: string | null = $state(null);

	function toggleEntry(id: string) {
		expandedEntry = expandedEntry === id ? null : id;
	}
</script>

<div class="about-page">
	<!-- Header Panel -->
	<IndustrialPanel title="ABOUT ME">
		<p class="intro-text">
			My journey from California to Rochester, and the lessons I've learned along the way.
			Select a log entry below to read more.
		</p>
	</IndustrialPanel>

	<IndustrialDivider />

	<!-- Log Entry Navigation -->
	<IndustrialPanel title="LOG ENTRIES">
		<div class="entry-grid">
			{#each blogEntries as entry}
				<IndustrialButton
					label="[{entry.date}] {entry.title}"
					onClick={() => toggleEntry(entry.id)}
					variant={expandedEntry === entry.id ? "active" : "default"}
				/>
			{/each}
		</div>
	</IndustrialPanel>

	<!-- Expanded Entry Content -->
	{#each blogEntries as entry}
		{#if expandedEntry === entry.id}
			<IndustrialDivider />
			<IndustrialPanel title={entry.title}>
				<div class="entry-content">
					<div class="entry-date">{entry.date}</div>
					<p class="entry-text">{entry.content}</p>
				</div>
			</IndustrialPanel>
		{/if}
	{/each}

	<IndustrialDivider />

	<!-- Quick Stats -->
	<IndustrialPanel title="PERSONNEL FILE">
		<div class="stats-grid">
			<div class="stat-row">
				<span class="stat-label">CURRENT LOCATION:</span>
				<span class="stat-value">Rochester, NY</span>
			</div>
			<div class="stat-row">
				<span class="stat-label">ORIGIN:</span>
				<span class="stat-value">Carlsbad, California</span>
			</div>
			<div class="stat-row">
				<span class="stat-label">RELOCATED:</span>
				<span class="stat-value">May 2023</span>
			</div>
			<div class="stat-row">
				<span class="stat-label">INTERESTS:</span>
				<span class="stat-value">Running, Music, Software Engineering, Exploring</span>
			</div>
		</div>
	</IndustrialPanel>

	<IndustrialDivider />

	<div class="socials-section">
		<Socials />
	</div>
</div>

<style lang="scss">
	.about-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.intro-text {
		color: #c9c9c9;
		line-height: 1.6;
		margin: 0;
	}

	.entry-grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.entry-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.entry-date {
		font-size: 0.75rem;
		color: #888888;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.entry-text {
		color: #c9c9c9;
		line-height: 1.8;
		margin: 0;
		white-space: pre-line;
	}

	.stats-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.stat-row {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;

		@media (max-width: 640px) {
			flex-direction: column;
			gap: 0.25rem;
		}
	}

	.stat-label {
		color: #888888;
		min-width: 160px;
		flex-shrink: 0;
	}

	.stat-value {
		color: #8b9a5b;
	}

	.socials-section {
		display: flex;
		justify-content: center;
		padding: 1rem 0;
	}
</style>
