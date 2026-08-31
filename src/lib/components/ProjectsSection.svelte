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
		lessons?: string;
	}

	// Featured: documented with the full problem → constraints → decision → outcome → lessons structure
	const featured: Project[] = [
		{
			name: "Matrix Miles",
			description: "IoT fitness dashboard that bridges Strava running data with embedded hardware. Go backend with PostgreSQL, REST API, and a CircuitPython-powered LED matrix display.",
			tech: ["Go", "CircuitPython", "PostgreSQL", "Docker", "Strava API"],
			code: "https://github.com/McCune1224/matrix-miles",
			image: "/projects/matrix-miles.png",
			problem: "I wanted my daily running stats visible on a physical display by the door — not buried three taps deep in the Strava app — and a real reason to learn embedded development end to end.",
			constraints: "No prior embedded or CircuitPython experience, a tight hardware budget (off-the-shelf parts only), and Strava's API rate limits plus webhook requirements that needed a public endpoint I didn't want to expose.",
			decision: "Built Go as the integration layer — poll Strava, cache in PostgreSQL, serve a small REST API — and kept the display deliberately dumb: CircuitPython just fetches and renders. Chose polling over webhooks to avoid standing up an internet-facing server.",
			result: "Auto-syncs 30+ days of runs to a headless Pi display with zero manual lookups each morning.",
			lessons: "The Pi's SD card wore out once, so I'd move all state into Postgres and make the device fully stateless. I'd also add webhook support and a weather widget now.",
		},
		{
			name: "Little_T Twitter Bot",
			description: "Twitter bot using Markov Chains for generative text, deployed serverlessly on AWS Lambda with MongoDB. Real-time interaction via the Twitter Account Activity API.",
			tech: ["Python", "AWS Lambda", "MongoDB", "Twitter API"],
			code: "https://github.com/McCune1224/little-t",
			image: "/projects/little-t.png",
			problem: "I wanted to experiment with generative text and serverless deployment without paying for always-on infrastructure.",
			constraints: "The Twitter API required a paid tier and a public webhook endpoint, Lambda cold starts added latency, and the MongoDB Atlas free tier capped throughput — all while the Markov model needed enough corpus to stay coherent.",
			decision: "Used Markov chains over a curated corpus for on-topic output and deployed serverless on Lambda behind API Gateway to stay near-zero cost, with MongoDB for conversation state.",
			result: "Ran autonomously, responding to mentions for months at near-zero hosting cost.",
			lessons: "API pricing made it unsustainable, so today I'd rebuild it on a cheaper or free platform like Bluesky. I'd also add output filtering to keep generations on-topic.",
		},
		{
			name: "Betrayal Discord Bot",
			description: "Feature-rich Discord bot for a battle royale social deduction game. Structured logging, async PostgreSQL batch writes, command audit trails, and dynamic channel management.",
			tech: ["Go", "PostgreSQL", "Docker", "Discord API"],
			code: "https://github.com/McCune1224/betrayal",
			image: "/projects/betrayal.png",
			problem: "A friend's gaming group needed a bot that could run a custom social-deduction mode reliably across many concurrent lobbies without mixing games together.",
			constraints: "Discord's rate limits, disputes that needed a traceable record, and per-game voice/text channels that had to spin up and tear down cleanly without leaking state between matches.",
			decision: "Went async with batched PostgreSQL writes and structured logging for full auditability, isolated each game's channel lifecycle, and kept a command audit trail so any action is traceable after the fact.",
			result: "Handled multiple concurrent games with clean state isolation and a complete audit log for every command.",
			lessons: "I'd add retry/backoff for rate limits and adopt a migration tool earlier — schema changes were painful to ship by hand.",
		},
		{
			name: "Kusa Data",
			description: "Competitive Melee tournament dashboard powered by the Start.gg GraphQL API. Browse upcoming events, dig into seeds and results, and get per-player match analytics — all cached in Redis.",
			tech: ["Elixir", "Phoenix LiveView", "Tailwind CSS", "Redis", "Start.gg API"],
			code: "https://github.com/McCune1224/kusa-data",
			image: "/projects/kusa-data.png",
			problem: "I wanted a faster way to scout opponents and read tournament results than Start.gg's own UI, and a project to learn Elixir and Phoenix LiveView.",
			constraints: "Start.gg's GraphQL API is rate-limited, result data is deeply nested and verbose, and I wanted near-real-time updates without hammering the upstream on every page view.",
			decision: "Used Phoenix LiveView for a reactive UI with no separate JS frontend, and Redis to cache GraphQL responses and debounce upstream calls while normalizing seeds and results for per-player analytics.",
			result: "Tournament pages load from cache in well under a second, with full seed and match analytics for any player.",
			lessons: "I'd precache popular events and add player-follow notifications so scouting updates push to you instead of requiring a refresh.",
		},
	];

	// Secondary: lighter cards linking out to GitHub
	const more: Project[] = [
		{
			name: "CompTIA Security+ Prep",
			description: "Offline-first, Blackboard-style learning system for the CompTIA Security+ (SY0-701) exam. Structured course plan with adaptive practice, PBQs, timed exams, spaced repetition, and a weighted gradebook backed by SQLite.",
			tech: ["SvelteKit", "SQLite", "Tailwind CSS", "Obsidian"],
			code: "https://github.com/McCune1224/comptia-security",
			image: "/projects/comptia.png",
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
