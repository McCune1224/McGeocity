<script lang="ts">
	import Socials from "$lib/components/Socials.svelte";
	import TerminalLine from "$lib/components/TerminalLine.svelte";
	// Removing unused import: import {linear} from "svelte/easing";

	// Define blog entries with IDs and titles for the table of contents
	const blogEntries = [
		{
			id: "entry-02042025",
			date: "02/04/2025",
			title: "Moving to Rochester",
		},
		// You can add more entries here as they are created
	];
</script>

<div class="container mx-auto px-4 py-8">
	<TerminalLine />
	<h1 class="text-3xl mb-6">$> echo blog.md</h1>

	<!-- Table of Contents -->
	<div class="mb-8 p-4 border border-green-500 rounded-md">
		<h2 class="text-2xl mb-4">Table of Contents</h2>
		<ul class="list-disc pl-6">
			{#each blogEntries as entry}
			<li class="mb-2">
				<p class="text-green-500 hover:underline">
					{entry.date} - {entry.title}
				</p>
			</li>
			{/each}
		</ul>
	</div>

	<!-- Blog Entries -->
	<div class="flex flex-row rounded-xl border-green-500 border-dashed items-center mb-10">
		<div class="p-10 flex flex-col gap-4 text-xl">
			<h2 class="text-2xl font-bold ani-hide">
				[ENTRY: 02/04/2025] Moving to Rochester Take 2
			</h2>
			<p class="ani-hide">
				Well to go into more detail about myself then... Hi! I've been in
				Rochester since May 2023 but I grew up most of my life on the West Coast
				in Carlsbad California (life is rad in Carlsbad). It's been a bit of an
				interesting experience so far living in Rochester as it is such
				lifestyle for me. For one, "Cold" for me used to be 60, and a brief 2
				minutes of wind at most for the day. Moving to Rochester, you'd be lucky
				to see 60 on a day that wasn't in Summer.
			</p>
			<p class="ani-hide">
				I didn't have any intentions of moving out of California, however I was
				struggling to find work after my undergrad and my old roommates who
				moved out here and mentioned they had a room available if I ever wanted.
				Pondering on it for a bit, I decided to pack my things and fly across to
				country to a State I've never been to, let alone the city I would be
				living in.
			</p>
			<p class="ani-hide">
				So far it has been a mixed bag I'd say, on one hand I got to reconnect
				with two very close friends to me who I have known for 6+ years now, but
				on the other life for me was stagnant pretty much up until I got my most
				recent job in late 2024. Before my current job I was working a help-desk
				/ call center IT job that was miserable. It ate up a lot of my day, the
				commute was generally an hour at minimum due to me not having a car and
				public transit being a coin flip if things were going to be on time or
				not, plus there was no clear path ahead to know when it would end which
				did not help. Slap on some cold weather and gray skies for half of the
				year and thats a nice little recipie to get someone feeling down for a
				long while...
			</p>
			<p class="ani-hide">
				Thankfully I have escaped that pit I was in and life has taken a
				positive turn. The end of Winter is (hopefully) near and with that I
				want to jumpstart my life again now that I have a lot more time, money,
				and energy back on my side. I want to get really into running this year,
				as well as hopefully travel more now that this is an actual a job where
				I'm not being worked like a horse 24/7
			</p>
			<p>
				Anywho, I'll add more of these entries as time goes on (hopefully),
				until then take care :)
			</p>
		</div>
	</div>
</div>
<Socials />
