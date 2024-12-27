<script lang="ts">
	import Scrollbar from "./Scrollbar.svelte";
	import retro_about from "$lib/assets/retro_about.png";
	import retro_about_hover from "$lib/assets/retro_about_hover.png";
	import retro_projects from "$lib/assets/retro_projects.png";
	import retro_projects_hover from "$lib/assets/retro_projects_hover.png";
	import retro_music from "$lib/assets/retro_music.png";
	import retro_music_hover from "$lib/assets/retro_music_hover.png";
	import RetroButtonLink from "$lib/components/RetroButtonLink.svelte";
	const statements: string[] = [
		"VISITOR DETECTED...",
		"LOG 26 LOADED",
		"ACCESS_GRANTED = TRUE;",
	];

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
<div class="text-xs sm:text-3xl font-mono text-green-400">
	{#each nameGrid as line}
		<p>{line}</p>
	{/each}
	<div
		class="py-20 flex flex-col sm:flex-row sm:justify-evenly items-center gap-8"
	>
		<RetroButtonLink
			title="WHO AM I"
			url="/about"
			src={retro_about}
			hoverSrc={retro_about_hover}
			alt="ascii art person"
		/>
		<RetroButtonLink
			title="PROJECTS"
			url="/projects"
			src={retro_projects}
			hoverSrc={retro_projects_hover}
			alt="ascii art wrench"
		/>
		<RetroButtonLink
			title="MUSIC"
			url="/music"
			src={retro_music}
			hoverSrc={retro_music_hover}
			alt="ascii art wrench"
		/>
	</div>
</div>
