<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<Navbar />

<main id="main-content">
	{@render children()}
</main>

<Footer />
