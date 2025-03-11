<script lang="ts">
	import retro_about from "$lib/assets/retro_about.png";
	import retro_about_hover from "$lib/assets/retro_about_hover.png";
	import retro_projects from "$lib/assets/retro_projects.png";
	import retro_projects_hover from "$lib/assets/retro_projects_hover.png";
	import retro_music from "$lib/assets/retro_music.png";
	import retro_music_hover from "$lib/assets/retro_music_hover.png";
	import RetroButtonLink from "$lib/components/RetroButtonLink.svelte";
	import TerminalLine from "$lib/components/TerminalLine.svelte";
	import Socials from "$lib/components/Socials.svelte";

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
<section class="text-center sm:text-2xl text-green-400">
	<p class="text-sm">
		* CAUTION: For best viewing experience please use a desktop browser as the
		website was designed for that in mind. Sorry in advanced mobile users!
	</p>
	<TerminalLine />
	<p class="text-start">$> neocityfetch</p>
	<div class="text-smol sm:text-2xl">
		{#each nameGrid as line, i}
		{#if i == 3}
		<a class="hover:text-red-500" href="/layarteb">[{line}]!!!</a>
		{:else}
		<p>{line}</p>
		{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-8">
		<p class="text-md sm:mx-auto">
			Welcome to my little digital corner of the web! I'm <b>Alex McCune</b>, in
			case the giant sign above was ignored. I live in <b>Rochester NY</b>
			currently working as an application/system admin. I love to program in my free
			time, but when not working or coding you can normally find me playing board
			games, video games, rock climbing or running.
			<i class="text-sm">(A lot more of the gaming during the pure gray and snowy winters we
				have here...)</i>
			Feel free to check out some of the links below to learn more if interested
			:)
		</p>
	</div>
	<div class="py-2 flex flex-col sm:flex-row sm:justify-evenly items-center gap-8">
		<RetroButtonLink title="[WHO AM I]" url="/about" src={retro_about} hoverSrc={retro_about_hover}
			alt="ascii art person" />
		<RetroButtonLink title="[ WORKS ]" url="/projects" src={retro_projects} hoverSrc={retro_projects_hover}
			alt="ascii art wrench" />
		<RetroButtonLink title="[ MUSIC ]" url="/music" src={retro_music} hoverSrc={retro_music_hover}
			alt="ascii art wrench" />
	</div>

	<Socials />
</section>
