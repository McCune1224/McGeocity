<script lang="ts">
	import "../app.css";
	import "@fontsource/inter/latin-400.css";
	import "@fontsource/inter/latin-500.css";
	import "@fontsource/inter/latin-600.css";
	import "@fontsource/inter/latin-700.css";
	import "@fontsource/jetbrains-mono/latin-400.css";
	import "@fontsource/jetbrains-mono/latin-500.css";
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
