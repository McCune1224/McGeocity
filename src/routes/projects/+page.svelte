<script lang="ts">
	import PanelBox from "$lib/components/portal/PanelBox.svelte";
	import PanelButton from "$lib/components/portal/PanelButton.svelte";
	import PanelContainer from "$lib/components/portal/PanelContainer.svelte";
	import PortalTransition from "$lib/components/portal/PortalTransition.svelte";
	import TablePanel from "$lib/components/portal/TablePanel.svelte";

	const projects = [
		{
			title: "Matrix Miles",
			body: "An IoT project that bridges fitness data with embedded hardware. Features a Go backend server handling Strava OAuth 2.0 authentication with automatic token refresh, PostgreSQL database, and REST API with API key authentication. The embedded client runs on a MatrixPortal M4 with CircuitPython, displaying running stats like calendar views, weekly/monthly totals, and best performances on an LED matrix. Deployed on Railway with Docker.",
			tags: "GO, CIRCUITPYTHON, POSTGRESQL, DOCKER, IOT, STRAVA_API, RAILWAY",
			demo: "https://matrix-miles-production.up.railway.app",
			url: "https://github.com/McCune1224/matrix-miles",
		},
		{
			title: "Betrayal Discord Bot",
			body: "A comprehensive Discord bot for managing Betrayal, a battle royale social deduction game where players have unique roles and abilities. Built with Go and featuring production-grade structured logging with zerolog, async PostgreSQL batch writes, command audit trails, and automatic 90-day log retention with CSV archival. Handles game events like inventory management, alliance creation, timed events, and dynamic channel management.",
			tags: "GO, POSTGRESQL, DOCKER, DISCORD_API, ZEROLOG, TEMPL",
			demo: "https://github.com/McCune1224/betrayal",
			url: "https://github.com/McCune1224/betrayal",
		},
		{
			title: "Eggbert",
			body: "Eggbert is a RPG game made in the Godot Game Engine where you are an egg named Eggbert who is falsely accused of a crime you did not commit. You journey through the prison system as you attempt to escape and uncover the secrets within the prison along the way",
			tags: "GODOT, C#, PIXEL_ART, RPG, TOP-DOWN_SHOOTER",
			demo: "https://github.com/McCune1224/eggbert",
			url: "https://github.com/McCune1224/eggbert",
		},
		{
			title: "Twitter Bot Little_T",
			body: "A Machine Learning Model built with Markov Chains, written in Python, and deployed via AWS Lambda functions to give real time interaction with Twitter users thanks to the Twitter Account Activity API. It uses Twitter's General API for tweet data collection and the popular Python Tweepy library for interaction with Twitter's API.",
			tags: "PYTHON, AWS, MONGO_DB, MACHINE LEARNING, TWITTER_REST_API",
			demo: "https://x.com/little_t_bot",
			url: "https://github.com/McCune1224/little-t",
		},
		{
			title: "Kusa Data",
			body: "Kusa Data is a web app that utilizes the Start.gg GraphQL API to quickly find Smash Bros Ultimate Tournaments. It provides utilizes Redis to cache often searched results to minimize wait time and allow for optimal response times. This web app also allows to view player profiles to quickly see their tournament history and placements.",
			tags: "TYPESCRIPT, REDIS, GRAPH-QL, START_GG_REST_API",
			demo: "https://kusa-data.vercel.app/",
			url: "https://github.com/McCune1224/kusa-data",
		},
	];
</script>

<PortalTransition>
	<div class="space-y-8">
		<!-- Header -->
		<PanelBox title="PROJECTS" variant="interactive">
			<p class="text-gray-700">
				A curated collection of projects spanning IoT, game development, 
				machine learning, and web applications.
			</p>
		</PanelBox>

		<!-- Desktop Table View -->
		<div class="hidden md:block">
			<TablePanel
				headers={["PROJECT", "DESCRIPTION", "TECH STACK", "LINKS"]}
				rows={projects.map((p) => [
					p.title,
					p.body.substring(0, 100) + "...",
					p.tags,
					"Demo / Repo",
				])}
			/>
		</div>

		<!-- Mobile Card View -->
		<div class="md:hidden space-y-4">
			{#each projects as project, i}
				<PanelBox title="{i + 1}. {project.title}" variant="default">
					<div class="space-y-3">
						<div>
							<h4 class="font-mono text-xs font-bold text-gray-600 uppercase mb-1">
								Description
							</h4>
							<p class="text-sm text-gray-700">{project.body}</p>
						</div>

						<div>
							<h4 class="font-mono text-xs font-bold text-gray-600 uppercase mb-1">
								Tech Stack
							</h4>
							<p class="text-xs font-mono text-blue-600">
								{project.tags}
							</p>
						</div>

						<div class="flex gap-2 pt-2">
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 px-3 py-2 text-sm border-2 border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-smooth text-center font-mono font-bold"
							>
								DEMO
							</a>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 px-3 py-2 text-sm border-2 border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-smooth text-center font-mono font-bold"
							>
								CODE
							</a>
						</div>
					</div>
				</PanelBox>
			{/each}
		</div>

		<!-- Desktop Detailed Card View (Alternative) -->
		<div class="hidden md:block lg:hidden space-y-4">
			{#each projects as project, i}
				<PanelBox title="{i + 1}. {project.title}" variant="default">
					<div class="space-y-3">
						<p class="text-sm text-gray-700">{project.body}</p>

						<div>
							<h4 class="font-mono text-xs font-bold text-gray-600 uppercase mb-1">
								Tech Stack
							</h4>
							<p class="text-xs font-mono text-blue-600">
								{project.tags}
							</p>
						</div>

						<div class="flex gap-2 pt-2">
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 px-3 py-2 text-sm border-2 border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-smooth text-center font-mono font-bold"
							>
								DEMO
							</a>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 px-3 py-2 text-sm border-2 border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-smooth text-center font-mono font-bold"
							>
								CODE
							</a>
						</div>
					</div>
				</PanelBox>
			{/each}
		</div>
	</div>
</PortalTransition>
