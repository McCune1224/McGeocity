<script lang="ts">
	import type { PageServerData } from "./$types";
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialTable from "$lib/components/industrial/IndustrialTable.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialLoader from "$lib/components/industrial/IndustrialLoader.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

	let { data }: { data: PageServerData } = $props();

	let isLoading = $state(true);

	$effect(() => {
		if (data.playlistData || data.error) {
			setTimeout(() => {
				isLoading = false;
			}, 500);
		}
	});

	// Filter playlists to only show user's own
	let userPlaylists = $derived(
		data.playlistData?.items.filter((p) => p.owner.id === "mccune1224") ?? []
	);

	// Prepare table data
	let tableHeaders = ["#", "PLAYLIST NAME", "DESCRIPTION"];
	let tableRows = $derived(
		userPlaylists.map((p, i) => [
			String(i + 1),
			p.name,
			p.description || "—"
		])
	);
</script>

<div class="music-page">
	{#if isLoading}
		<div class="loader-container">
			<IndustrialLoader message="CONNECTING TO SPOTIFY..." />
		</div>
	{:else}
		<!-- Header Panel -->
		<IndustrialPanel title="SPOTIFY PLAYLISTS">
			<div class="intro-content">
				<p class="intro-text">
					Below is a list of my Spotify playlists. I am a <span class="accent">HUGE</span> Math Rock
					and Guitar Instrumental fan. Some favorites:
					<a href="https://chonofficial.bandcamp.com/album/woohoo" target="_blank" rel="noopener noreferrer">Chon</a>
					and
					<a href="https://covettheband.com/" target="_blank" rel="noopener noreferrer">Covet</a>.
				</p>
				<p class="intro-secondary">
					Besides Math Rock, I enjoy Indie Rock and Dream Pop. Always open to recommendations!
				</p>
			</div>
		</IndustrialPanel>

		<IndustrialDivider />

		{#if data.error}
			<IndustrialPanel title="SYSTEM ERROR">
				<p class="error-text">Failed to connect to Spotify</p>
				<p class="error-detail">{data.error}</p>
			</IndustrialPanel>
		{:else if userPlaylists.length > 0}
			<!-- Desktop Table View -->
			<div class="table-view">
				<IndustrialTable title="PLAYLIST MANIFEST" headers={tableHeaders} rows={tableRows} />
			</div>

			<IndustrialDivider />

			<!-- Playlist Cards -->
			<IndustrialPanel title="PLAYLIST DETAILS">
				<div class="playlist-grid">
					{#each userPlaylists as playlist, i}
						<div class="playlist-card">
							<div class="playlist-header">
								<span class="playlist-number">{i + 1}.</span>
								<span class="playlist-name">{playlist.name}</span>
							</div>
							{#if playlist.description}
								<p class="playlist-desc">{playlist.description}</p>
							{/if}
							<div class="playlist-actions">
								<IndustrialButton label="[ OPEN IN SPOTIFY ]" href={playlist.external_urls.spotify} />
							</div>
						</div>
					{/each}
				</div>
			</IndustrialPanel>
		{:else}
			<IndustrialPanel title="NO DATA">
				<p class="error-text">No playlists found</p>
			</IndustrialPanel>
		{/if}
	{/if}
</div>

<style lang="scss">
	.music-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.loader-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 400px;
	}

	.intro-content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.intro-text {
		color: #c9c9c9;
		line-height: 1.6;
		margin: 0;

		a {
			color: #8b9a5b;
			text-decoration: underline;

			&:hover {
				color: #a5b56f;
			}
		}
	}

	.intro-secondary {
		color: #888888;
		font-size: 0.875rem;
		margin: 0;
	}

	.accent {
		color: #8b9a5b;
		font-weight: bold;
	}

	.error-text {
		color: #aa5555;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
	}

	.error-detail {
		color: #888888;
		font-size: 0.875rem;
		margin: 0;
	}

	.table-view {
		@media (max-width: 768px) {
			display: none;
		}
	}

	.playlist-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.playlist-card {
		padding: 1rem;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
		background: #252525;
	}

	.playlist-header {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.playlist-number {
		color: #888888;
		font-weight: bold;
	}

	.playlist-name {
		color: #8b9a5b;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.playlist-desc {
		color: #c9c9c9;
		font-size: 0.875rem;
		line-height: 1.6;
		margin: 0 0 1rem 0;
	}

	.playlist-actions {
		display: flex;
	}
</style>
