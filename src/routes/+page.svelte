<script lang="ts">
	import Scrollbar from "./Scrollbar.svelte";
	const statements: string[] = [
		"VISITOR DETECTED...",
		"LOG 26 LOADED",
		"ACCESS_GRANTED = TRUE;",
	];
</script>

<main class="bg-black h-screen text-white">
	<section class="mx-8 py-9">
		<Scrollbar {statements} />
		<h1 class="text-7xl text-center">Welcome Traveller!</h1>
	</section>
</main>
