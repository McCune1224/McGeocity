<script lang="ts">
	import type {PageServerData} from "./$types";
	import Terminal from "./Terminal.svelte";
	const {data}: {data: PageServerData} = $props();
</script>

<section class="flex flex-col gap-2">
	<p>
		Ah I see you were able to stumble upon this page. Thought it would be fun to
		have a little easter egg / capture the flag hunt on the site. Good luck
		finding out how to move forward from here! Anyways, I'll be over here eating
		my <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank"
			class="hover:text-red-500 underline">[ Vigenere Ceasar ]</a> Salad... yes that's a thing.
	</p>
	<p>
		Actually...I'm so confident that I'll even give you the encrypted phrase:
	</p>

	<p class="text-3xl p-4">ehc crdi jd a jiv</p>
</section>

<Terminal access_granted={data.access_granted==="true" } />
