<script lang="ts">
	import TerminalTableColumn from "./TerminalTableColumn.svelte";
</script>

<p class="text-start text-2xl">$> Projects</p>
<table class="table-auto text-lg">
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
		<TerminalTableColumn title="Eggbert"
			body="Eggbert is a RPG game made in the Godot Game Engine where you are an egg named Eggbert who is falsely accused of a crime you did not commit. You journey through the prison system as you attempt to escape and uncover the secrets within the prison along the way"
			tags="GODOT, C#, PIXEL_ART, RPG, TOP-DOWN_SHOOTER" demo="https://github.com/McCune1224/eggbert"
			url="https://github.com/McCune1224/eggbert" />
		<TerminalTableColumn title="Twitter Bot Little_T"
			body="A Machine Learning Model built with Markov Chains, written in Python, and deployed via AWS Lambda functions to give real time interaction with Twitter users thanks to the Twitter Account Activity API. It uses Twitter's General API for tweet data collection and the popular Python Tweepy library \for interaction with Twitter's API."
			tags="PYTHON, AWS, MONGO_DB, MACHINE LEARNING, TWITTER_REST_API" demo="https://x.com/little_t_bot"
			url="https://github.com/McCune1224/little-t" />
		<TerminalTableColumn title="Betrayal Discord Bot"
			body="Masque Royale is a battle royale social deduction game where everyone has unique roles and abilities to help them in their interactions. The game is hosted interchangebly between Discord as well as a standalone Web App. Both utilize Golang and share a PostgreSQL Database to ensure syncronized game data. Both the discord and web app are deployed via docker images."
			tags="GO, POSTGRESQL, DOCKER, DISCORD_REST_API" demo="https://github.com/McCune1224/betrayal"
			url="https://github.com/McCune1224/betrayal" />
		<TerminalTableColumn title="Kusa Data"
			body="Kusa Data is a web app that utilizes the Start.gg GraphQL API to quickly find Smash Bros Ultimate Tournaments. It provides utilizes Redis to cache often searched results to minimize wait time and allow for optimal response times. This web app also allows to view player profiles to quickly see their tournament history and placements."
			tags="TYPESCRIPT, REDIS, GRAPH-QL, START_GG_REST_API" demo="https://kusa-data.vercel.app/"
			url="https://github.com/McCune1224/kusa-data" />
	</tbody>
</table>
