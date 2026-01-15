<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		columns?: 1 | 2 | 3 | 4;
		gap?: "sm" | "md" | "lg";
		children: Snippet;
	}

	const { columns = 2, gap = "md", children }: Props = $props();

	const gapMap = {
		sm: "gap-4",
		md: "gap-6",
		lg: "gap-8"
	};

	const colMap = {
		1: "grid-cols-1",
		2: "grid-cols-1 sm:grid-cols-2",
		3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
		4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
	};
</script>

<div class="grid {colMap[columns]} {gapMap[gap]}">
	{@render children()}
</div>
