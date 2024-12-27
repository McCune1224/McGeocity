<script lang="ts">
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
		class="sm:mx-8 bg-black border-green-400 border-8 flex flex-col h-screen"
	>
		<div class="bg-green-400 sm:p-2">
			<nav
				class="text-black flex gap-8 sm:text-4xl text-xl justify-between items-center"
			>
				<p class="text-md sm:text-3xl font-mono text-black">
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
		<div class="m-4 sm:m-8">
			{@render children()}
		</div>
	</div>
	<div class="sm:py-2"></div>
</main>
