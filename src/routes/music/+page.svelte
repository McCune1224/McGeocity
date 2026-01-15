<script lang="ts">
	import type { PageServerData } from "./$types";
	import PanelBox from "$lib/components/portal/PanelBox.svelte";
	import LoadingPanel from "$lib/components/portal/LoadingPanel.svelte";
	import TablePanel from "$lib/components/portal/TablePanel.svelte";
	import PortalTransition from "$lib/components/portal/PortalTransition.svelte";

	let { data }: { data: PageServerData } = $props();

	let isLoading = $state(true);

	$effect(() => {
		if (data.playlistData || data.error) {
			setTimeout(() => {
				isLoading = false;
			}, 500);
		}
	});
</script>

{#if isLoading}
	<PortalTransition>
		<div class="flex items-center justify-center min-h-[400px]">
			<LoadingPanel message="CONNECTING TO SPOTIFY..." />
		</div>
	</PortalTransition>
{:else}
	<PortalTransition>
		<div class="space-y-8">
			<!-- Header -->
			<PanelBox title="SPOTIFY PLAYLISTS" variant="interactive">
				<div class="space-y-3">
					<p class="text-gray-700">
						Below is a list of my Spotify playlists, all of varying degrees of genres
						and moods. I am a <span class="font-bold">HUGE</span> Math Rock and Guitar 
						Instrumental fan. Some favorites: <a href="https://chonofficial.bandcamp.com/album/woohoo" 
						class="text-blue-500 hover:underline" target="_blank">Chon</a> and 
						<a href="https://covettheband.com/" class="text-blue-500 hover:underline" 
						target="_blank">Covet</a>.
					</p>
					<p class="text-sm text-gray-600 italic">
						Besides Math Rock, I enjoy Indie Rock and Dream Pop. Always open to recommendations!
					</p>
				</div>
			</PanelBox>

			<!-- Playlists -->
			{#if !data.error && data.playlistData}
				<!-- Desktop Table View -->
				<div class="hidden md:block">
					<TablePanel
						headers={["PLAYLIST NAME", "DESCRIPTION", "LINK"]}
						rows={data.playlistData.items
							.filter((p) => p.owner.id === "mccune1224")
							.map((p) => [
								p.name,
								p.description || "—",
								"SPOTIFY"
							])}
					/>
				</div>

				<!-- Mobile Card View -->
				<div class="md:hidden space-y-4">
					{#each data.playlistData.items as playlist, i}
						{#if playlist.owner.id === "mccune1224"}
							<PanelBox title="{i + 1}. {playlist.name}" variant="default">
								<div class="space-y-3">
									<div>
										<h4 class="font-mono text-xs font-bold text-gray-600 uppercase mb-1">
											Description
										</h4>
										<p class="text-sm text-gray-700">
											{playlist.description || "No description"}
										</p>
									</div>
									<a
										href={playlist.external_urls.spotify}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-block px-4 py-2 border-2 border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-smooth font-mono font-bold text-sm"
									>
										OPEN IN SPOTIFY
									</a>
								</div>
							</PanelBox>
						{/if}
					{/each}
				</div>
			{:else if data.error}
				<PanelBox variant="default">
					<p class="text-red-600 font-mono">
						ERROR: Failed to load Spotify data
					</p>
					<p class="text-sm text-gray-600 mt-2">{data.error}</p>
				</PanelBox>
			{/if}
		</div>
	</PortalTransition>
{/if}
