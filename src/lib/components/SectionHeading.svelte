<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		id?: string;
	}

	let { title, subtitle, id }: Props = $props();
</script>

<div class="section-heading" {id}>
	<h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary ">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-2 text-text-secondary text-lg max-w-2xl mx-auto">
			{subtitle}
		</p>
	{/if}
	<div class="mt-4 h-1 w-16 rounded-full bg-accent-primary"></div>
</div>
