<script lang="ts">
	interface NavItem {
		label: string;
		href: string;
	}

	interface SocialLink {
		label: string;
		href: string;
	}

	interface Props {
		title: string;
		items: NavItem[];
		socials?: SocialLink[];
		currentPath?: string;
		onFullscreen?: () => void;
	}

	const { title, items, socials = [], currentPath = "/", onFullscreen }: Props = $props();

	function isActive(href: string): boolean {
		if (href === "/") {
			return currentPath === "/";
		}
		return currentPath.startsWith(href);
	}
</script>

<header class="industrial-menubar">
	<div class="menubar-inner">
		<!-- Title Section (links to home) -->
		<a href="/" class="menubar-title">
			<span class="title-text">{title}</span>
		</a>

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
			<!-- Social Links -->
			{#if socials.length > 0}
				<nav class="social-links">
					{#each socials as social, i}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="social-link"
						>
							{social.label}
						</a>
						{#if i < socials.length - 1}
							<span class="social-divider">//</span>
						{/if}
					{/each}
				</nav>
			{/if}
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
		text-decoration: none;
		transition: opacity 0.1s ease;

		&:hover {
			opacity: 0.8;
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}
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
		gap: 0.5rem;
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding-right: 0.75rem;
		border-right: 1px solid #4a4a4a;
	}

	.social-link {
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		color: #c9c9c9;
		transition: color 0.1s ease;

		&:hover {
			color: #8b9a5b;
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}
	}

	.social-divider {
		font-size: 0.75rem;
		color: #888888;
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
			width: 100%;
			justify-content: center;
			padding: 0.5rem 0;
			border-top: 1px solid #1a1a1a;
		}

		.social-links {
			border-right: none;
			padding-right: 0;
		}

		.control-btn {
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
