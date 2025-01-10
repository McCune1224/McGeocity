<script lang="ts">
	import Socials from "$lib/components/Socials.svelte";
	import type { PageServerData } from "./$types";
	import Terminal from "./Terminal.svelte";
	const { data }: { data: PageServerData } = $props();
</script>

<section class="flex flex-col gap-2">
	<p>
		How did you stumble upon this page? You're not supposed to be here. Meh, not
		a concern for me though. Access to the terminal tied to an phrase that needs
		to be decrypted so you won't be able to do much here. Anyways, I'll be over
		here eating my <a
			href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher"
			target="_blank"
			class="hover:text-red-500">[ Vigenere Ceasar ]</a
		> Salad... yes that's a thing.
	</p>
	<p>
		Actually...I'm so confident that I'll even give you the encrypted phrase:
	</p>

	<p class="text-3xl p-4">ehc crdi jd a jiv</p>
</section>

<Terminal access_granted={data.access_granted === "true"} />

<Socials />

amoebalover scienceRULES
