<script lang="ts">
	const {
		title,
		body,
		tags,
		demo,
		url,
	}: { title: string; body: string; tags: string; demo: string; url: string } =
		$props();
</script>

<tr class="border-dashed border-2 border-green-500">
	<td class="p-2">{title}</td>
	<td class="p-4">{body}</td>
	<td class="p-1">{tags}</td>
	<td class="p-1 hover:text-red-400">
		<a target="_blank" href={demo}>DEMO_LINK --></a></td
	>
	<td class="p-1 hover:text-red-400">
		<a target="_blank" href={url}>SOURCE_CODE --></a></td
	>
</tr>
