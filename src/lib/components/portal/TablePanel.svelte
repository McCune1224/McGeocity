<script lang="ts">
	interface Props {
		headers: string[];
		rows: (string | number)[][];
	}

	const { headers, rows }: Props = $props();
</script>

<div class="overflow-x-auto border-2 border-black bg-white">
	<table class="w-full">
		<thead>
			<tr class="border-b-2 border-black">
				{#each headers as header}
					<th class="px-4 py-3 text-left font-mono font-bold text-black">
						{header}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row, i}
				<tr
					class="border-b border-gray-200 transition-smooth hover:bg-gray-50 {i ===
					rows.length - 1
						? ''
						: ''}"
				>
					{#each row as cell}
						<td class="px-4 py-3 font-mono text-sm text-black">
							{cell}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	table {
		border-collapse: collapse;
	}

	tbody tr:hover {
		background-color: rgba(74, 144, 226, 0.05);
	}
</style>
