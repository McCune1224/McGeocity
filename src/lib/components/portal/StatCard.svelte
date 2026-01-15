<script lang="ts">
	interface Props {
		label: string;
		value: string | number;
		unit?: string;
		accent?: "blue" | "orange" | "green" | "cyan";
	}

	const { label, value, unit, accent = "blue" }: Props = $props();

	const accentColors = {
		blue: "border-blue-500 text-blue-500",
		orange: "border-orange-500 text-orange-500",
		green: "border-green-500 text-green-500",
		cyan: "border-cyan-400 text-cyan-400"
	};
</script>

<div class="border-2 border-black bg-white p-4">
	<p class="text-sm font-mono text-gray-600">{label}</p>
	<div class="mt-2 flex items-baseline gap-2">
		<span class="text-3xl font-bold font-mono {accentColors[accent]}">
			{value}
		</span>
		{#if unit}
			<span class="text-sm font-mono text-gray-500">{unit}</span>
		{/if}
	</div>
</div>
