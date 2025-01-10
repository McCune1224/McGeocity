<script lang="ts">
	import retro_about from "$lib/assets/retro_about.png";
	import retro_about_hover from "$lib/assets/retro_about_hover.png";
	import retro_projects from "$lib/assets/retro_projects.png";
	import retro_projects_hover from "$lib/assets/retro_projects_hover.png";
	import retro_music from "$lib/assets/retro_music.png";
	import retro_music_hover from "$lib/assets/retro_music_hover.png";
	import RetroButtonLink from "$lib/components/RetroButtonLink.svelte";
	import TerminalLine from "$lib/components/TerminalLine.svelte";

	const nameGrid = [
		".█████╗.██╗.....███████╗██╗..██╗......................",
		"██╔══██╗██║.....██╔════╝╚██╗██╔╝......................",
		"███████║██║.....█████╗...╚███╔╝.......................",
		"██╔══██║██║.....██╔══╝...██╔██╗.......................",
		"██║..██║███████╗███████╗██╔╝.██╗......................",
		"╚═╝..╚═╝╚══════╝╚══════╝╚═╝..╚═╝......................",
		"																											 ",
		"███╗...███╗.██████╗.██████╗██╗...██╗███╗...██╗███████╗",
		"████╗.████║██╔════╝██╔════╝██║...██║████╗..██║██╔════╝",
		"██╔████╔██║██║.....██║.....██║...██║██╔██╗.██║█████╗..",
		"██║╚██╔╝██║██║.....██║.....██║...██║██║╚██╗██║██╔══╝..",
		"██║.╚═╝.██║╚██████╗╚██████╗╚██████╔╝██║.╚████║███████╗",
		"╚═╝.....╚═╝.╚═════╝.╚═════╝.╚═════╝.╚═╝..╚═══╝╚══════╝",
	];
</script>

<!-- The following page will be styled in a retro 90's/hacker website -->
<!-- <Scrollbar {statements} /> -->
<section class="text-center sm:text-3xl text-green-400">
	<p class="text-smol">
		* CAUTION: For best viewing experience please use a desktop browser. Sorry
		in advanced mobile users!
	</p>
	<TerminalLine />
	<p class="text-start">$> neocityfetch</p>
	<div class="text-smol sm:text-2xl">
		{#each nameGrid as line, i}
			{#if i == 3}
				<a class="hover:text-red-500 hover:text-8xl" href="/layarteb"
					>[{line}]</a
				>
			{:else}
				<p>{line}</p>
			{/if}
		{/each}
	</div>
	<p class="text-base sm:mx-auto">
		Welcome to my little digital corner of the web! Below are some links to
		learn more about me and my interests (all links are indicated with a [ ] ).
		(For example if you're feeling adventurous, you can also check out my music
		and maybe scoop some for your own playlists!)
	</p>
	<div
		class="py-2 flex flex-col sm:flex-row sm:justify-evenly items-center gap-8"
	>
		<RetroButtonLink
			title="[WHO AM I]"
			url="/about"
			src={retro_about}
			hoverSrc={retro_about_hover}
			alt="ascii art person"
		/>
		<RetroButtonLink
			title="[ WORKS ]"
			url="/projects"
			src={retro_projects}
			hoverSrc={retro_projects_hover}
			alt="ascii art wrench"
		/>
		<RetroButtonLink
			title="[ MUSIC ]"
			url="/music"
			src={retro_music}
			hoverSrc={retro_music_hover}
			alt="ascii art wrench"
		/>
	</div>
</section>
