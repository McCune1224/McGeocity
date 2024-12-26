<script lang="ts">
	let { statements }: { statements: string[] } = $props();
</script>

<div class="flex overflow-hidden select-none gap-4 text-white">
	<ul
		class="marquee__content flex shrink-0 justify-around min-w-full gap-4 border-2 border-green-500"
	>
		{#each statements as statement, i}
			<li class="">{statement}</li>
		{/each}
		<li>EOF</li>
	</ul>
	<!-- Mirrors the content above -->
	<ul
		class="marquee__content flex shrink-0 justify-around min-w-full gap-4 border-2 border-green-500"
		aria-hidden="true"
	>
		{#each statements as statement, i}
			<li>{statement}</li>
		{/each}
		<li>EOF</li>
	</ul>
</div>

<style>
	.marquee__content {
		animation: scroll 10s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 1rem));
		}
	}
</style>
