<script lang="ts">
	interface Props {
		label: string;
		value: string | number;
		unit?: string;
		accent?: "green" | "orange" | "red";
	}

	const { label, value, unit, accent = "green" }: Props = $props();

	const accentColors = {
		green: "#8b9a5b",
		orange: "#d4a55b",
		red: "#aa5555"
	};

	const accentColor = accentColors[accent];
</script>

<div class="industrial-stat-card">
	<div class="stat-label">{label}</div>
	<div class="stat-value" style="color: {accentColor}">
		{value}
		{#if unit}
			<span class="stat-unit">{unit}</span>
		{/if}
	</div>
</div>

<style lang="scss">
	.industrial-stat-card {
		padding: 1rem;
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		font-family: var(--font-mono, "Courier New", monospace);
		text-align: center;
	}

	.stat-label {
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #888888;
		margin-bottom: 0.5rem;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 1.2;
	}

	.stat-unit {
		font-size: 0.875rem;
		font-weight: normal;
		color: #888888;
		margin-left: 0.25rem;
	}

	@media (max-width: 640px) {
		.stat-value {
			font-size: 1.25rem;
		}

		.stat-label {
			font-size: 0.625rem;
		}
	}
</style>
