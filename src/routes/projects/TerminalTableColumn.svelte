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

<tr class="border-dashed border-2 border-green-500 sm:text-base text-sm">
	<td class="p-2 text-lg"><i>{title}</i></td>
	<td class="p-4"
		><p>{body}</p>
		<p><b>META_DATA: {tags}</b></p></td
	>
	<td class="p-2 hover:text-red-400">
		<a class="" target="_blank" href={demo}
			><p class="text-nowrap">[ DEMO_LINK ]</p></a
		></td
	>
	<td class="p-1 hover:text-red-400">
		<a target="_blank" href={url}><p class="text-nowrap">[ SOURCE_CODE ]</p></a
		></td
	>
</tr>
