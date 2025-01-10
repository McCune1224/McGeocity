<script lang="ts">
	import TerminalLine from "$lib/components/TerminalLine.svelte";
	import "../app.css";
	import type { LayoutServerData } from "./$types";
	import type { Snippet } from "svelte";
	let { data, children }: { data: LayoutServerData; children: Snippet } =
		$props();
	const fullScreenTogglePress = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};
	let paths = $derived(data.props.url.split("/") || "");
</script>

<main class="text-sm bg-black text-white">
	<div
		class="sm:mx-8 bg-black border-green-400 border-4 flex flex-col h-screen"
	>
		<div class="bg-green-400">
			<nav
				class="text-black flex gap-8 sm:text-4xl text-xl justify-between items-center mx-4"
			>
				<p class="text-smol sm:text-3xl font-mono text-black">
					DIR:
					{#each paths as path, i}
						{#if i == 0}
							<a class="hover:text-red-600" href="/">root</a>
						{:else}
							<a class="hover:text-red-600" href={path}>{" " + path}</a>
						{/if}
						{#if i < paths.length - 1}
							<span>/</span>
						{/if}
					{/each}
				</p>
				<div class="flex flex-row items-center gap-8">
					<a
						class="hover:text-red-600 sm:text-6xl text-4xl align-text-bottom"
						href={"/"}>-</a
					>
					<button class="hover:text-red-600" onclick={fullScreenTogglePress}
						>[ ]</button
					>
					<a class="hover:text-red-600" href="/">X</a>
				</div>
			</nav>
		</div>
		<div class="m-4 sm:m-8 font-mono text-base text-green-400 overflow-scroll">
			{@render children()}
		</div>
	</div>
	<div class="sm:py-2"></div>
</main>

<style lang="scss">
	main {
		background-color: black;
		background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
		height: 100vh;
		margin: 0;
		overflow: hidden;
		padding: 2rem;
		color: white;
		font:
			1.3rem Inconsolata,
			monospace;
		text-shadow: 0 0 5px #c8c8c8;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: repeating-linear-gradient(
				0deg,
				rgba(black, 0.15),
				rgba(black, 0.15) 1px,
				transparent 1px,
				transparent 2px
			);
			pointer-events: none;
		}
	}
	::selection {
		background: #0080ff;
		text-shadow: none;
	}
	pre {
		margin: 0;
	}
</style>
