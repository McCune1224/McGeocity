<script lang="ts">
	import "../app.css";
	import type { LayoutServerData } from "./$types";
	import type { Snippet } from "svelte";
	import IndustrialMenuBar from "$lib/components/industrial/IndustrialMenuBar.svelte";

	let { data, children }: { data: LayoutServerData; children: Snippet } = $props();

	const navItems = [
		{ label: "HOME", href: "/" },
		{ label: "WORKS", href: "/projects" },
		{ label: "MUSIC", href: "/music" },
		{ label: "HEALTH", href: "/healthcheck" }
	];

	const socialLinks = [
		{ label: "GITHUB", href: "https://github.com/mccune1224" },
		{ label: "LINKEDIN", href: "https://linkedin.com/in/mccune1224" },
		{ label: "BLUESKY", href: "https://bsky.app/profile/mckusa.bsky.social" },
		{ label: "SUBSTACK", href: "https://mccune1224.substack.com/" }
	];

	let currentPath = $derived(data?.props?.url ?? "/");
	let isSubpage = $derived(currentPath !== "/");

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
		title="alexmccune.dev"
		items={navItems}
		socials={socialLinks}
		{currentPath}
		onFullscreen={handleFullscreen}
	/>

	<!-- Main Content Area -->
	<main class="main-content">
		<div class="content-container">
			{#if isSubpage}
				<a href="/" class="back-button">
					<span class="back-arrow">&lt;</span> BACK TO HOME
				</a>
			{/if}
			{@render children()}
		</div>
	</main>

	<!-- Industrial Footer -->
	<footer class="industrial-footer">
		<div class="footer-content">
			<a href="/layarteb" class="easter-egg-link">
				[ ? ]
			</a>
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

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		padding: 0.5rem 1rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-weight: bold;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		color: #c9c9c9;
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		transition: all 0.1s ease;

		&:hover {
			border-color: #5a5a5a #2a2a2a #2a2a2a #5a5a5a;
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			color: #8b9a5b;
		}

		&:active {
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
			transform: translateY(1px);
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}
	}

	.back-arrow {
		font-size: 1rem;
		color: #8b9a5b;
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

	.easter-egg-link {
		font-family: var(--font-mono, "Courier New", monospace);
		font-size: 0.875rem;
		font-weight: bold;
		color: #555555;
		text-decoration: none;
		transition: color 0.1s ease;

		&:hover {
			color: #8b9a5b;
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}
	}

	@media (max-width: 640px) {
		.main-content {
			padding: 1rem;
		}
	}
</style>
