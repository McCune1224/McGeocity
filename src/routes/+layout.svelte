<script lang="ts">
	import "../app.css";
	import type { LayoutServerData } from "./$types";
	import type { Snippet } from "svelte";
	import IndustrialMenuBar from "$lib/components/industrial/IndustrialMenuBar.svelte";

	let { data, children }: { data: LayoutServerData; children: Snippet } = $props();

	const navItems = [
		{ label: "HOME", href: "/" },
		{ label: "ABOUT", href: "/about" },
		{ label: "WORKS", href: "/projects" },
		{ label: "MUSIC", href: "/music" },
		{ label: "HEALTH", href: "/healthcheck" }
	];

	let currentPath = $derived(data?.props?.url ?? "/");

	function handleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	}
</script>

<div class="industrial-app">
	<!-- Industrial Menu Bar -->
	<IndustrialMenuBar
		title="MCGEOCITY"
		items={navItems}
		{currentPath}
		onFullscreen={handleFullscreen}
	/>

	<!-- Main Content Area -->
	<main class="main-content">
		<div class="content-container">
			{@render children()}
		</div>
	</main>

	<!-- Industrial Footer -->
	<footer class="industrial-footer">
		<div class="footer-content">
			<span class="footer-text">MCGEOCITY // HALF-LIFE AESTHETIC // 2026</span>
		</div>
	</footer>
</div>

<style lang="scss">
	.industrial-app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #1a1a1a;
	}

	.main-content {
		flex: 1;
		padding: 1.5rem;
	}

	.content-container {
		max-width: 1280px;
		margin: 0 auto;
	}

	.industrial-footer {
		margin-top: auto;
		padding: 1rem;
		background: linear-gradient(180deg, #2d2d2d 0%, #252525 100%);
		border-top: 2px solid #4a4a4a;
		text-align: center;
	}

	.footer-content {
		max-width: 1280px;
		margin: 0 auto;
	}

	.footer-text {
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #8b9a5b;
	}

	@media (max-width: 640px) {
		.main-content {
			padding: 1rem;
		}
	}
</style>
