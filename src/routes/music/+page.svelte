<script lang="ts">
	import type { PageServerData } from "./$types";
	import type { SpotifyPlaylistResponse } from "./+page.server";

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
<section class="">
	{#if !data.error}
		<div class="sm:grid sm:grid-cols-2 flex flex-col justify-end text-sm gap-2">
			{#each data.playlistData.items as playlist}
				{#if playlist.owner.id == "mccune1224"}
					<div class="">
						<p class="">TITLE: {playlist.name}</p>
						<p class="">DESCRIPTION: ({playlist.description})</p>
						<a
							class="hover:text-red-500"
							href={playlist.external_urls.spotify}
							target="_blank"
							rel="noopener noreferrer"
						>
							[SPOTIFY_LINK]
						</a>
					</div>
				{/if}
			{/each}
		</div>
	{:else}
		<p>FAILED TO LOAD SPOTIFY DATA: {data.error}</p>
	{/if}
</section>
