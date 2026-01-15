<script lang="ts">
	interface NavItem {
		label: string;
		href: string;
	}

	interface Props {
		title: string;
		items: NavItem[];
		currentPath?: string;
		onFullscreen?: () => void;
	}

	const { title, items, currentPath = "/", onFullscreen }: Props = $props();

	function isActive(href: string): boolean {
		if (href === "/") {
			return currentPath === "/";
		}
		return currentPath.startsWith(href);
	}
</script>

<header class="industrial-menubar">
	<div class="menubar-inner">
		<!-- Title Section -->
		<div class="menubar-title">
			<span class="title-text">{title}</span>
		</div>

		<!-- Navigation Tabs -->
		<nav class="menubar-nav">
			{#each items as item}
				<a
					href={item.href}
					class="nav-tab {isActive(item.href) ? 'active' : ''}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Controls -->
		<div class="menubar-controls">
			{#if onFullscreen}
				<button
					class="control-btn"
					onclick={onFullscreen}
					title="Toggle fullscreen"
					aria-label="Toggle fullscreen"
				>
					[ ]
				</button>
			{/if}
		</div>
	</div>
</header>

<style lang="scss">
	.industrial-menubar {
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		border-bottom: 2px solid;
		border-color: #1a1a1a;
		font-family: var(--font-mono, "Courier New", monospace);
	}

	.menubar-inner {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: stretch;
		padding: 0 1rem;
	}

	.menubar-title {
		display: flex;
		align-items: center;
		padding: 0.75rem 1.5rem 0.75rem 0;
		border-right: 2px solid #1a1a1a;
	}

	.title-text {
		font-weight: bold;
		font-size: 1.125rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #8b9a5b;
	}

	.menubar-nav {
		display: flex;
		align-items: stretch;
		flex: 1;
	}

	.nav-tab {
		display: flex;
		align-items: center;
		padding: 0.75rem 1.25rem;
		font-weight: bold;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		color: #c9c9c9;
		border-left: 1px solid #1a1a1a;
		border-right: 1px solid #4a4a4a;
		background: transparent;
		transition: all 0.1s ease;

		&:first-child {
			border-left: none;
		}

		&:hover:not(.active) {
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			color: #8b9a5b;
		}

		&.active {
			background: #252525;
			color: #8b9a5b;
			border-top: 2px solid #1a1a1a;
			margin-top: -2px;
			padding-top: calc(0.75rem + 2px);
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: -2px;
		}
	}

	.menubar-controls {
		display: flex;
		align-items: center;
		margin-left: auto;
		padding-left: 1rem;
	}

	.control-btn {
		padding: 0.5rem 0.75rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-weight: bold;
		font-size: 0.875rem;
		color: #c9c9c9;
		background: transparent;
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		cursor: pointer;
		transition: all 0.1s ease;

		&:hover {
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			color: #8b9a5b;
		}

		&:active {
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}
	}

	@media (max-width: 768px) {
		.menubar-inner {
			flex-wrap: wrap;
		}

		.menubar-title {
			width: 100%;
			border-right: none;
			border-bottom: 2px solid #1a1a1a;
			padding: 0.75rem 0;
			justify-content: center;
		}

		.menubar-nav {
			width: 100%;
			overflow-x: auto;
		}

		.nav-tab {
			flex: 1;
			justify-content: center;
			padding: 0.5rem 0.75rem;
			font-size: 0.75rem;
		}

		.menubar-controls {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.nav-tab,
		.control-btn {
			transition: none;
		}
	}
</style>
