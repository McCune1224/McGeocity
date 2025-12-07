<script lang="ts">
	import type { PageServerData } from "./$types";

	let { data }: { data: PageServerData } = $props();

	let isLoading = $state(true);
	let loadingText = $state("");
	let loadingFrame = $state(0);

	const loadingMessages = [
		"CONNECTING TO SPOTIFY...",
		"LOADING PLAYLISTS...",
		"COMPLETE!"
	];

	const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

	$effect(() => {
		if (!data.playlistData && !data.error) return;

		let messageIndex = 0;
		let charIndex = 0;

		const spinnerInterval = setInterval(() => {
			loadingFrame = (loadingFrame + 1) % spinnerFrames.length;
		}, 80);

		const typeInterval = setInterval(() => {
			if (messageIndex < loadingMessages.length) {
				const currentMessage = loadingMessages[messageIndex];
				if (charIndex <= currentMessage.length) {
					loadingText = currentMessage.slice(0, charIndex);
					charIndex++;
				} else {
					messageIndex++;
					charIndex = 0;
					if (messageIndex === loadingMessages.length) {
						setTimeout(() => {
							isLoading = false;
						}, 100);
					}
				}
			}
		}, 12);

		return () => {
			clearInterval(spinnerInterval);
			clearInterval(typeInterval);
		};
	});
</script>

{#if isLoading}
	<section class="loading-container">
		<div class="text-center">
			<pre class="text-green-400 text-xs sm:text-sm mb-4">
╔══════════════════════════════════════════╗
║  ░▒▓█ SPOTIFY DATA RETRIEVAL SYSTEM █▓▒░ ║
╚══════════════════════════════════════════╝
			</pre>
			<div class="loading-bar mb-4">
				<div class="loading-progress"></div>
			</div>
			<p class="text-lg sm:text-xl">
				<span class="text-yellow-400">{spinnerFrames[loadingFrame]}</span>
				{loadingText}<span class="cursor">_</span>
			</p>
			<div class="waveform mt-6">
				{#each Array(20) as _, i}
					<div class="bar" style="--delay: {i * 0.05}s"></div>
				{/each}
			</div>
		</div>
	</section>
{:else}
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
{/if}

<style lang="scss">
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
	}

	.cursor {
		animation: blink 0.7s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.loading-bar {
		width: 100%;
		max-width: 400px;
		height: 20px;
		border: 2px solid #4ade80;
		margin: 0 auto;
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: repeating-linear-gradient(
				90deg,
				transparent,
				transparent 8px,
				rgba(74, 222, 128, 0.1) 8px,
				rgba(74, 222, 128, 0.1) 16px
			);
		}
	}

	.loading-progress {
		height: 100%;
		background: linear-gradient(90deg, #4ade80, #22c55e);
		animation: load 0.5s ease-in-out forwards;
		box-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80;
	}

	@keyframes load {
		0% { width: 0%; }
		50% { width: 60%; }
		100% { width: 100%; }
	}

	.waveform {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3px;
		height: 40px;
	}

	.bar {
		width: 4px;
		background: #4ade80;
		animation: wave 0.8s ease-in-out infinite;
		animation-delay: var(--delay);
		box-shadow: 0 0 5px #4ade80;
	}

	@keyframes wave {
		0%, 100% { height: 8px; }
		50% { height: 35px; }
	}
</style>
