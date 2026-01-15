<script lang="ts">
	import "../app.css";
	import type { LayoutServerData } from "./$types";
	import type { Snippet } from "svelte";

	let { data, children }: { data: LayoutServerData; children: Snippet } = $props();

	const fullScreenTogglePress = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};

	let paths = $derived(
		data?.props?.url ? data.props.url.split("/").filter(Boolean) : []
	);
</script>

<main class="min-h-screen bg-white">
	<!-- Header Navigation -->
	<header class="border-b-2 border-black bg-white sticky top-0 z-50">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
			<!-- Breadcrumb Navigation -->
			<nav class="flex items-center gap-2 font-mono text-sm">
				<a
					href="/"
					class="text-black hover:text-blue-500 transition-smooth font-bold"
				>
					mcgeocity
				</a>

				{#each paths as path}
					<span class="text-gray-400">/</span>
					<a
						href="/{path}"
						class="text-black hover:text-blue-500 transition-smooth capitalize"
					>
						{path}
					</a>
				{/each}
			</nav>

			<!-- Header Controls -->
			<div class="flex items-center gap-3">
				<button
					onclick={fullScreenTogglePress}
					class="px-3 py-2 border-2 border-black bg-white hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-smooth font-mono font-bold text-sm"
					title="Toggle fullscreen"
				>
					[ ]
				</button>
			</div>
		</div>
	</header>

	<!-- Main Content Area -->
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
		{@render children()}
	</div>

	<!-- Footer -->
	<footer class="border-t-2 border-black bg-gray-50 mt-16 py-8">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 text-center font-mono text-sm text-gray-600">
			<p>Portal-inspired Portfolio © 2026</p>
		</div>
	</footer>
</main>

<style lang="scss">
	main {
		background-color: #ffffff;
		color: #000000;
	}

	/* Scrollbar styling */
	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background: #f0f0f0;
	}

	::-webkit-scrollbar-thumb {
		background: #999999;
		border-radius: 6px;

		&:hover {
			background: #666666;
		}
	}

	::selection {
		background: rgba(74, 144, 226, 0.2);
		color: #000000;
	}
</style>
