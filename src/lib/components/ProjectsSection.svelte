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
		problem?: string;
		constraints?: string;
		decision?: string;
		result?: string;
	}

	const featured: Project[] = [
		{
			name: "Matrix Miles",
			description: "IoT dashboard that pulls Strava data to a physical LED matrix. Go backend, PostgreSQL, and CircuitPython on a Pi.",
			tech: ["Go", "CircuitPython", "PostgreSQL", "Docker", "Strava API"],
			code: "https://github.com/McCune1224/matrix-miles",
			image: "/projects/matrix-miles.png",
			problem: "I wanted my daily running stats visible on a physical display by the door — not buried three taps deep in the Strava app — and a real reason to learn embedded development end to end.",
			constraints: "No prior embedded or CircuitPython experience, a tight hardware budget (off-the-shelf parts only), and Strava's API rate limits plus webhook requirements that needed a public endpoint I didn't want to expose.",
			decision: "Built Go as the integration layer — poll Strava, cache in PostgreSQL, serve a small REST API — and kept the display deliberately dumb: CircuitPython just fetches and renders. Chose polling over webhooks to avoid standing up an internet-facing server.",
			result: "Auto-syncs 30+ days of runs to a headless Pi display with zero manual lookups each morning.",
		},
		{
			name: "Little_T Twitter Bot",
			description: "Twitter bot that generates text with Markov Chains. Ran on AWS Lambda with MongoDB for state, responding to mentions in real time.",
			tech: ["Python", "AWS Lambda", "MongoDB", "Twitter API"],
			code: "https://github.com/McCune1224/little-t",
			image: "/projects/little-t.png",
			problem: "I wanted to experiment with generative text and serverless deployment without paying for always-on infrastructure.",
			constraints: "The Twitter API required a paid tier and a public webhook endpoint, Lambda cold starts added latency, and the MongoDB Atlas free tier capped throughput — all while the Markov model needed enough corpus to stay coherent.",
			decision: "Used Markov chains over a curated corpus for on-topic output and deployed serverless on Lambda behind API Gateway to stay near-zero cost, with MongoDB for conversation state.",
			result: "Ran autonomously, responding to mentions for months at near-zero hosting cost.",
		},
		{
			name: "Betrayal Discord Bot",
			description: "Discord bot for a social deduction game. Handles concurrent lobbies with full state isolation and a traceable command log.",
			tech: ["Go", "PostgreSQL", "Docker", "Discord API"],
			code: "https://github.com/McCune1224/betrayal",
			image: "/projects/betrayal.png",
			problem: "A friend's gaming group needed a bot that could run a custom social-deduction mode reliably across many concurrent lobbies without mixing games together.",
			constraints: "Discord's rate limits, disputes that needed a traceable record, and per-game voice/text channels that had to spin up and tear down cleanly without leaking state between matches.",
			decision: "Went async with batched PostgreSQL writes and structured logging for full auditability, isolated each game's channel lifecycle, and kept a command audit trail so any action is traceable after the fact.",
			result: "Handled multiple concurrent games with clean state isolation and a complete audit log for every command.",
		},
		{
			name: "Kusa Data",
			description: "Melee tournament dashboard that pulls data from Start.gg. Browse events, check seeds and results, and view per-player match analytics.",
			tech: ["Elixir", "Phoenix LiveView", "Tailwind CSS", "Redis", "Start.gg API"],
			code: "https://github.com/McCune1224/kusa-data",
			image: "/projects/kusa-data.png",
			problem: "I wanted a faster way to scout opponents and read tournament results than Start.gg's own UI, and a project to learn Elixir and Phoenix LiveView.",
			constraints: "Start.gg's GraphQL API is rate-limited, result data is deeply nested and verbose, and I wanted near-real-time updates without hammering the upstream on every page view.",
			decision: "Used Phoenix LiveView for a reactive UI with no separate JS frontend, and Redis to cache GraphQL responses and debounce upstream calls while normalizing seeds and results for per-player analytics.",
			result: "Tournament pages load from cache in well under a second, with full seed and match analytics for any player.",
		},
	];

	const more: Project[] = [
		{
			name: "CompTIA Security+ Prep",
			description: "Study tool for the CompTIA Security+ (SY0-701). Structured course plan, practice questions, timed exams, and spaced repetition — all offline with SQLite.",
			tech: ["SvelteKit", "SQLite", "Tailwind CSS", "Obsidian"],
			code: "https://github.com/McCune1224/comptia-security",
			image: "/projects/comptia.png",
		},
		{
			name: "Eggbert",
			description: "RPG in Godot where you play as Eggbert, an egg accused of a crime he didn't commit. Escape a prison system and piece together what happened.",
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
			subtitle="Selected work — built to solve real problems, not just to demo a stack."
		/>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each featured as project}
				<ProjectCard {...project} />
			{/each}
		</div>

		<div class="mt-10">
			<h3 class="text-sm font-medium uppercase tracking-wide text-text-tertiary mb-4">More on GitHub</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{#each more as project}
					<ProjectCard {...project} compact />
				{/each}
			</div>
		</div>
	</div>
</section>
