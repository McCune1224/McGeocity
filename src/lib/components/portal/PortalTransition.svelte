<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="animate-portal-entry portal-transition-wrapper">
	{@render children()}
</div>

<style lang="scss">
	@keyframes portalEntry {
		0% {
			opacity: 0;
			transform: scale(0.95);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	.portal-transition-wrapper {
		animation: portalEntry 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		position: relative;
		z-index: 0;
	}
</style>
