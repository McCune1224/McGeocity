<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";
	import ProjectCard from "./ProjectCard.svelte";

	interface Project {
		name: string;
		description: string;
		tech: string[];
		demo?: string;
		code?: string;
		image?: string;
	}

	const projects: Project[] = [
		{
			name: "CompTIA Security+ Prep",
			description: "Offline-first, Blackboard-style learning system for the CompTIA Security+ (SY0-701) exam. Structured course plan with adaptive practice, PBQs, timed exams, spaced repetition, and a weighted gradebook backed by SQLite.",
			tech: ["SvelteKit", "SQLite", "Tailwind CSS", "Obsidian"],
			code: "https://github.com/McCune1224/comptia-security",
			image: "/projects/comptia.png",
		},
		{
			name: "Matrix Miles",
			description: "IoT fitness dashboard that bridges Strava running data with embedded hardware. Go backend with PostgreSQL, REST API, and a CircuitPython-powered LED matrix display.",
			tech: ["Go", "CircuitPython", "PostgreSQL", "Docker", "Strava API"],
			code: "https://github.com/McCune1224/matrix-miles",
			image: "/projects/matrix-miles.png",
		},
		{
			name: "Betrayal Discord Bot",
			description: "Feature-rich Discord bot for a battle royale social deduction game. Structured logging, async PostgreSQL batch writes, command audit trails, and dynamic channel management.",
			tech: ["Go", "PostgreSQL", "Docker", "Discord API"],
			code: "https://github.com/McCune1224/betrayal",
			image: "/projects/betrayal.png",
		},
		{
			name: "Little_T Twitter Bot",
			description: "Twitter bot using Markov Chains for generative text, deployed serverlessly on AWS Lambda with MongoDB. Real-time interaction via Twitter Account Activity API.",
			tech: ["Python", "AWS Lambda", "MongoDB", "Twitter API"],
			code: "https://github.com/McCune1224/little-t",
			image: "/projects/little-t.png",
		},
		{
			name: "Kusa Data",
			description: "Competitive Melee tournament dashboard powered by the Start.gg GraphQL API. Browse upcoming events, dig into seeds and results, and get per-player match analytics — all cached in Redis.",
			tech: ["Elixir", "Phoenix LiveView", "Tailwind CSS", "Redis", "Start.gg API"],
			code: "https://github.com/McCune1224/kusa-data",
			image: "/projects/kusa-data.png",
		},
		{
			name: "Eggbert",
			description: "RPG game in Godot where you play as Eggbert, an egg falsely accused of a crime. Journey through a prison system to escape and uncover secrets.",
			tech: ["Godot", "C#", "GDScript"],
			code: "https://github.com/McCune1224/eggbert",
			image: "/projects/eggbert.jpg",
		},
	];
</script>

<section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-content mx-auto">
		<SectionHeading
			title="Projects"
			subtitle=""
		/>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each projects as project}
				<ProjectCard
					name={project.name}
					description={project.description}
					tech={project.tech}
					demo={project.demo}
					code={project.code}
					image={project.image}
				/>
			{/each}
		</div>
	</div>
</section>
