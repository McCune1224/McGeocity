<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		headers: string[];
		rows: string[][];
		title?: string;
	}

	const { headers, rows, title }: Props = $props();
</script>

<div class="industrial-table-wrapper">
	{#if title}
		<div class="table-title">
			<span>{title}</span>
		</div>
	{/if}
	<div class="table-container">
		<table class="industrial-table">
			<thead>
				<tr>
					{#each headers as header}
						<th>{header}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as row}
					<tr>
						{#each row as cell}
							<td>{cell}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style lang="scss">
	.industrial-table-wrapper {
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: #2d2d2d;
		font-family: var(--font-mono, "Courier New", monospace);
	}

	.table-title {
		padding: 0.5rem 1rem;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		border-bottom: 2px solid #1a1a1a;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #8b9a5b;
		font-size: 0.875rem;
	}

	.table-container {
		overflow-x: auto;
	}

	.industrial-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
	}

	th {
		padding: 0.75rem 1rem;
		text-align: left;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #8b9a5b;
		background: #252525;
		border-bottom: 2px solid #4a4a4a;
		white-space: nowrap;
	}

	td {
		padding: 0.75rem 1rem;
		color: #c9c9c9;
		border-bottom: 1px solid #3a3a3a;
	}

	tr:hover td {
		background: #353535;
	}

	tr:last-child td {
		border-bottom: none;
	}

	@media (max-width: 640px) {
		th,
		td {
			padding: 0.5rem 0.75rem;
			font-size: 0.75rem;
		}
	}
</style>
