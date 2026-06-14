<script lang="ts">
	import "../app.css";
	import NetworkBackground from "$lib/components/NetworkBackground.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<NetworkBackground />

<Navbar />

<main id="main-content" class="relative z-[1]">
	{@render children()}
</main>

<Footer />
