<script lang="ts">
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
			body: "A Machine Learning Model built with Markov Chains, written in Python, and deployed via AWS Lambda functions to give real time interaction with Twitter users thanks to the Twitter Account Activity API. It uses Twitter's General API for tweet data collection and the popular Python Tweepy library \for interaction with Twitter's API.",
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

<p class="text-start text-2xl">$> Projects</p>

<!-- Mobile view -->
<div class="flex flex-col gap-4 sm:hidden">
	{#each projects as project, i}
		<div>
			<p class="border-b-2 border-green-500">-[ Project {i + 1} ]-</p>
			<div class="grid grid-cols-[max-content,1fr] gap-x-4 p-2 text-sm">
				<span class="font-bold text-right">NAME</span>
				<span>{project.title}</span>

				<span class="font-bold text-right">ABOUT</span>
				<span>{project.body}</span>

				<span class="font-bold text-right">META_DATA</span>
				<span>{project.tags}</span>

				<span class="font-bold text-right">DEMO</span>
				<a
					class="hover:text-red-500"
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
				>
					[ DEMO_LINK ]
				</a>

				<span class="font-bold text-right">REPOSITORY</span>
				<a
					class="hover:text-red-500"
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					[ SOURCE_CODE ]
				</a>
			</div>
		</div>
	{/each}
</div>

<!-- Desktop view -->
<table class="hidden sm:table table-auto text-lg">
	<colgroup>
		<col span="4" class="border-2 border-dashed border-green-500" />
	</colgroup>
	<thead>
		<tr class="border-dashed border-2 border-green-500">
			<th>NAME</th>
			<th>ABOUT</th>
			<th>DEMO</th>
			<th>REPOSITORY</th>
		</tr>
	</thead>
	<tbody>
		{#each projects as project}
			<tr class="border-dashed border-2 border-green-500 sm:text-base text-sm">
				<td class="p-2 text-lg"><i>{project.title}</i></td>
				<td class="p-4">
					<p>{project.body}</p>
					<p><b>META_DATA: {project.tags}</b></p>
				</td>
				<td class="p-2 hover:text-red-400">
					<a class="" target="_blank" href={project.demo}>
						<p class="text-nowrap">[ DEMO_LINK ]</p>
					</a>
				</td>
				<td class="p-1 hover:text-red-400">
					<a target="_blank" href={project.url}>
						<p class="text-nowrap">[ SOURCE_CODE ]</p>
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
