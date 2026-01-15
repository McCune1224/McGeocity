<script lang="ts">
	import PanelBox from "$lib/components/portal/PanelBox.svelte";
	import PanelContainer from "$lib/components/portal/PanelContainer.svelte";
	import PanelButton from "$lib/components/portal/PanelButton.svelte";
	import PortalTransition from "$lib/components/portal/PortalTransition.svelte";
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

<PortalTransition>
	<div class="space-y-8">
		<!-- Header Panel -->
		<PanelBox title="About Me">
			<p class="text-base leading-relaxed text-gray-800">
				My journey from California to Rochester, and the lessons I've learned along the way. Below
				you'll find a series of personal reflections on moving, challenges, and finding my way forward.
			</p>
		</PanelBox>

		<!-- Table of Contents Navigation -->
		<PanelBox title="Blog Entries">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				{#each blogEntries as entry}
					<PanelButton
						label={entry.title}
						onClick={() => toggleEntry(entry.id)}
						variant={expandedEntry === entry.id ? "primary" : "secondary"}
					/>
				{/each}
			</div>
		</PanelBox>

		<!-- Blog Entries -->
		<div class="space-y-6">
			{#each blogEntries as entry}
				{#if expandedEntry === entry.id}
					<PanelBox title={entry.title} variant="interactive">
						<div class="space-y-3">
							<div class="text-sm text-gray-600 font-mono">
								{entry.date}
							</div>
							<p class="text-base leading-relaxed text-gray-800 whitespace-pre-line">
								{entry.content}
							</p>
						</div>
					</PanelBox>
				{/if}
			{/each}
		</div>

		<!-- Info Panel -->
		<PanelBox title="Quick Facts">
			<div class="space-y-4">
				<div class="border-l-4 border-blue-500 pl-4">
					<p class="font-mono text-sm text-gray-600">Current Location</p>
					<p class="text-base text-gray-800">Rochester, NY</p>
				</div>
				<div class="border-l-4 border-orange-500 pl-4">
					<p class="font-mono text-sm text-gray-600">From</p>
					<p class="text-base text-gray-800">Carlsbad, California</p>
				</div>
				<div class="border-l-4 border-cyan-400 pl-4">
					<p class="font-mono text-sm text-gray-600">Moved</p>
					<p class="text-base text-gray-800">May 2023</p>
				</div>
				<div class="border-l-4 border-green-500 pl-4">
					<p class="font-mono text-sm text-gray-600">Interests</p>
					<p class="text-base text-gray-800">Running, Music, Software Engineering, Exploring</p>
				</div>
			</div>
		</PanelBox>
	</div>
</PortalTransition>

<Socials />
