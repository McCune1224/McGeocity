<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		title?: string;
		variant?: "default" | "interactive";
		children: Snippet;
	}

	const { title, variant = "default", children }: Props = $props();

	const isInteractive = variant === "interactive";
</script>

<div
	class="border-2 border-black bg-white p-6 {isInteractive
		? 'shadow-lg hover-accent'
		: 'shadow-md'} transition-smooth"
>
	{#if title}
		<h2 class="mb-4 font-mono text-xl font-bold text-black">
			{title}
		</h2>
		<div class="mb-4 border-b-2 border-gray-300"></div>
	{/if}
	{@render children()}
</div>

<style lang="scss">
	div {
		animation: portalEntry 0.3s ease-out;
	}
</style>
