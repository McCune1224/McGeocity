<script lang="ts">
	import type { PageServerData } from "./$types";

	let { data }: { data: PageServerData } = $props();
</script>

<section>
	<p class="text-3xl">$> ls /music -r</p>
	<p class="py-4">
		Below is a list of my Spotify Playlists, all of varying degrees of generes
		and moods. But to quickly summarize: I am a <b> HUGE </b> Math Rock /
		Anything Gutiar Instrumental fan. Some of my favorite bands in the genre
		include:
		<b>
			<a
				class="hover:text-red-500"
				href="https://chonofficial.bandcamp.com/album/woohoo"
			>
				[ Chon ]
			</a>
			and

			<a class="hover:text-red-500" href="https://covettheband.com/">
				[ Covet ]
			</a>
		</b>. Besides that I listen to a decent chunk of Indie Rock and Dream pop.
		Those are the most frequent ones that come to mind, but honestly I love a
		good mix of everything <i class="text-smol">(except country, sorry)</i>. I'm
		always looking for new music to listen to, so if you have any
		recommendations, feel free to send them my way on my
		<a
			class="hover:text-red-500"
			href="https://bsky.app/profile/mckusa.bsky.social"
		>
			[ Bluesky ]</a
		>.
	</p>
</section>
<section class="font-mono">
	{#if !data.error && data.playlistData}
		<!-- Mobile view -->
		<div class="flex flex-col gap-4 sm:hidden">
			{#each data.playlistData.items as playlist, i}
				{#if playlist.owner.id == "mccune1224"}
					<div>
						<p class="border-b-2 border-green-500">-[ Playlist {i + 1} ]-</p>
						<div
							class="grid grid-cols-[max-content,max-content,1fr] gap-x-4 p-2 text-sm"
						>
							<span class="font-bold text-right">TITLE</span>
							<span>|</span>
							<span>{playlist.name}</span>

							<span class="font-bold text-right">DESCRIPTION</span>
							<span>|</span>
							<span>{playlist.description || "N/A"}</span>

							<span class="font-bold text-right">LINK</span>
							<span>|</span>
							<a
								class="hover:text-red-500"
								href={playlist.external_urls.spotify}
								target="_blank"
								rel="noopener noreferrer"
							>
								[SPOTIFY]
							</a>
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Desktop view -->
		<table class="hidden w-full text-sm sm:table">
			<thead>
				<tr class="border-b-2 border-green-500">
					<th class="p-2 text-left">TITLE</th>
					<th class="p-2 text-left">DESCRIPTION</th>
					<th class="p-2 text-left">LINK</th>
				</tr>
			</thead>
			<tbody>
				{#each data.playlistData.items as playlist}
					{#if playlist.owner.id == "mccune1224"}
						<tr class="border-b border-dashed border-green-700">
							<td class="p-2 align-top">{playlist.name}</td>
							<td class="p-2 align-top">{playlist.description || "N/A"}</td>
							<td class="p-2 align-top">
								<a
									class="hover:text-red-500"
									href={playlist.external_urls.spotify}
									target="_blank"
									rel="noopener noreferrer"
								>
									[SPOTIFY]
								</a>
							</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	{:else if data.error}
		<p>FAILED TO LOAD SPOTIFY DATA: {data.error}</p>
	{/if}
</section>
