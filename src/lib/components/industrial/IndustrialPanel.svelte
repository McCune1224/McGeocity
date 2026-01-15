<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		title?: string;
		variant?: "default" | "sunken";
		children: Snippet;
	}

	const { title, variant = "default", children }: Props = $props();

	const isSunken = variant === "sunken";
</script>

<div class="industrial-panel {isSunken ? 'sunken' : 'raised'}">
	{#if title}
		<div class="panel-header">
			<span class="panel-title">{title}</span>
		</div>
	{/if}
	<div class="panel-content">
		{@render children()}
	</div>
</div>

<style lang="scss">
	.industrial-panel {
		font-family: var(--font-mono, "Courier New", monospace);
		color: var(--text-primary, #c9c9c9);

		&.raised {
			border: 2px solid;
			border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
			background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		}

		&.sunken {
			border: 2px solid;
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
		}
	}

	.panel-header {
		padding: 0.5rem 1rem;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		border-bottom: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
	}

	.panel-title {
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #8b9a5b;
		font-size: 0.875rem;
	}

	.panel-content {
		padding: 1rem;
	}
</style>
