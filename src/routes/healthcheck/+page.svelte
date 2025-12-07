<script lang="ts">
	import type { PageServerData } from "./$types";

	let { data }: { data: PageServerData } = $props();

	let isLoading = $state(true);
	let loadingText = $state("");
	let loadingFrame = $state(0);
	let useKm = $state(false);

	const loadingMessages = [
		"CONNECTING TO STRAVA...",
		"FETCHING ACTIVITY DATA...",
		"COMPLETE!"
	];

	const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

	$effect(() => {
		let messageIndex = 0;
		let charIndex = 0;

		const spinnerInterval = setInterval(() => {
			loadingFrame = (loadingFrame + 1) % spinnerFrames.length;
		}, 80);

		const typeInterval = setInterval(() => {
			if (messageIndex < loadingMessages.length) {
				const currentMessage = loadingMessages[messageIndex];
				if (charIndex <= currentMessage.length) {
					loadingText = currentMessage.slice(0, charIndex);
					charIndex++;
				} else {
					messageIndex++;
					charIndex = 0;
					if (messageIndex === loadingMessages.length) {
						setTimeout(() => {
							isLoading = false;
						}, 100);
					}
				}
			}
		}, 12);

		return () => {
			clearInterval(spinnerInterval);
			clearInterval(typeInterval);
		};
	});

	// Unit conversion helpers
	function convertDistance(meters: number): string {
		if (useKm) {
			return (meters / 1000).toFixed(1);
		}
		return (meters / 1609.344).toFixed(1);
	}

	function getDistanceUnit(): string {
		return useKm ? "km" : "mi";
	}

	function formatTime(seconds: number): string {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = Math.floor(seconds % 60);

		if (hours > 0) {
			return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
		}
		return `${minutes}:${secs.toString().padStart(2, "0")}`;
	}

	function formatPace(meters: number, seconds: number): string {
		if (meters === 0) return "N/A";
		const distanceInUnit = useKm ? meters / 1000 : meters / 1609.344;
		const paceSeconds = seconds / distanceInUnit;
		const paceMinutes = Math.floor(paceSeconds / 60);
		const paceSecs = Math.floor(paceSeconds % 60);
		return `${paceMinutes}:${paceSecs.toString().padStart(2, "0")} /${useKm ? "km" : "mi"}`;
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "2-digit",
			day: "2-digit",
			year: "numeric"
		});
	}

	// Calculate YTD totals from all activity types
	function getYtdTotals() {
		if (!data.stats) return { distance: 0, count: 0, time: 0 };
		const run = data.stats.ytd_run_totals;
		const ride = data.stats.ytd_ride_totals;
		const swim = data.stats.ytd_swim_totals;
		return {
			distance: run.distance + ride.distance + swim.distance,
			count: run.count + ride.count + swim.count,
			time: run.moving_time + ride.moving_time + swim.moving_time,
		};
	}

	let ytdTotals = $derived(getYtdTotals());
</script>

{#if isLoading}
	<section class="loading-container">
		<div class="text-center">
			<pre class="text-green-400 text-xs sm:text-sm mb-4">
╔════════════════════════════════════════╗
║  ░▒▓█ STRAVA DATA RETRIEVAL SYSTEM █▓▒░ ║
╚════════════════════════════════════════╝
			</pre>
			<div class="loading-bar mb-4">
				<div class="loading-progress"></div>
			</div>
			<p class="text-lg sm:text-xl">
				<span class="text-yellow-400">{spinnerFrames[loadingFrame]}</span>
				{loadingText}<span class="cursor">_</span>
			</p>
			<div class="waveform mt-6">
				{#each Array(20) as _, i}
					<div class="bar" style="--delay: {i * 0.05}s"></div>
				{/each}
			</div>
		</div>
	</section>
{:else if data.error}
	<section class="error-container">
		<pre class="text-red-500 text-xs sm:text-sm mb-4">
╔════════════════════════════════════════╗
║  ░▒▓█ SYSTEM ERROR █▓▒░                ║
╚════════════════════════════════════════╝
		</pre>
		<p class="text-red-400 text-xl">{data.error}</p>
		<p class="text-green-400 mt-4">Please check your Strava API configuration.</p>
	</section>
{:else}
	<section>
		<p class="text-2xl sm:text-3xl">$> healthcheck --year={new Date().getFullYear()}</p>

		<!-- Unit Toggle -->
		<div class="flex items-center gap-4 my-4">
			<span class="text-sm">UNITS:</span>
			<button
				class="px-3 py-1 border border-green-500 {!useKm ? 'bg-green-500 text-black' : 'hover:bg-green-900'}"
				onclick={() => useKm = false}
			>
				MILES
			</button>
			<button
				class="px-3 py-1 border border-green-500 {useKm ? 'bg-green-500 text-black' : 'hover:bg-green-900'}"
				onclick={() => useKm = true}
			>
				KM
			</button>
		</div>

		<!-- Year to Date Stats -->
		<div class="my-6">
			<p class="border-b-2 border-green-500 pb-1 mb-4 text-xl">-[ YEAR TO DATE ]-</p>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
				<div class="stat-box">
					<p class="text-smol text-green-300">DISTANCE</p>
					<p class="text-xl sm:text-2xl">{convertDistance(ytdTotals.distance)} {getDistanceUnit()}</p>
				</div>
				<div class="stat-box">
					<p class="text-smol text-green-300">ACTIVITIES</p>
					<p class="text-xl sm:text-2xl">{ytdTotals.count}</p>
				</div>
				<div class="stat-box">
					<p class="text-smol text-green-300">TIME</p>
					<p class="text-xl sm:text-2xl">{formatTime(ytdTotals.time)}</p>
				</div>
				<div class="stat-box">
					<p class="text-smol text-green-300">AVG PACE</p>
					<p class="text-xl sm:text-2xl">{formatPace(ytdTotals.distance, ytdTotals.time)}</p>
				</div>
			</div>
		</div>

		<!-- Monthly Breakdown -->
		{#if data.monthlyBreakdown && data.monthlyBreakdown.length > 0}
			<div class="my-6">
				<p class="border-b-2 border-green-500 pb-1 mb-4 text-xl">-[ MONTHLY BREAKDOWN ]-</p>

				<!-- Mobile view -->
				<div class="flex flex-col gap-4 sm:hidden">
					{#each data.monthlyBreakdown as month}
						<div class="border border-dashed border-green-700 p-2">
							<p class="font-bold border-b border-green-700 mb-2">{month.month}</p>
							<div class="grid grid-cols-3 gap-2 text-sm">
								<div>
									<p class="text-smol text-green-300">DIST</p>
									<p>{convertDistance(month.distance)}</p>
								</div>
								<div>
									<p class="text-smol text-green-300">COUNT</p>
									<p>{month.count}</p>
								</div>
								<div>
									<p class="text-smol text-green-300">TIME</p>
									<p>{formatTime(month.time)}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Desktop view -->
				<table class="hidden w-full text-sm sm:table">
					<thead>
						<tr class="border-b-2 border-green-500">
							<th class="p-2 text-left">MONTH</th>
							<th class="p-2 text-left">DISTANCE</th>
							<th class="p-2 text-left">ACTIVITIES</th>
							<th class="p-2 text-left">TIME</th>
							<th class="p-2 text-left">AVG PACE</th>
						</tr>
					</thead>
					<tbody>
						{#each data.monthlyBreakdown as month}
							<tr class="border-b border-dashed border-green-700">
								<td class="p-2">{month.month}</td>
								<td class="p-2">{convertDistance(month.distance)} {getDistanceUnit()}</td>
								<td class="p-2">{month.count}</td>
								<td class="p-2">{formatTime(month.time)}</td>
								<td class="p-2">{formatPace(month.distance, month.time)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}

		<!-- Recent Activities -->
		{#if data.activities && data.activities.length > 0}
			<div class="my-6">
				<p class="border-b-2 border-green-500 pb-1 mb-4 text-xl">-[ RECENT ACTIVITIES ]-</p>

				<!-- Mobile view -->
				<div class="flex flex-col gap-4 sm:hidden">
					{#each data.activities.slice(0, 10) as activity}
						<div class="border border-dashed border-green-700 p-2">
							<p class="font-bold text-sm truncate">{activity.name}</p>
							<p class="text-smol text-green-300">{formatDate(activity.start_date_local)} | {activity.type}</p>
							<div class="grid grid-cols-3 gap-2 text-sm mt-2">
								<div>
									<p class="text-smol text-green-300">DIST</p>
									<p>{convertDistance(activity.distance)}</p>
								</div>
								<div>
									<p class="text-smol text-green-300">TIME</p>
									<p>{formatTime(activity.moving_time)}</p>
								</div>
								<div>
									<p class="text-smol text-green-300">PACE</p>
									<p>{formatPace(activity.distance, activity.moving_time)}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Desktop view -->
				<table class="hidden w-full text-sm sm:table">
					<thead>
						<tr class="border-b-2 border-green-500">
							<th class="p-2 text-left">DATE</th>
							<th class="p-2 text-left">NAME</th>
							<th class="p-2 text-left">TYPE</th>
							<th class="p-2 text-left">DISTANCE</th>
							<th class="p-2 text-left">TIME</th>
							<th class="p-2 text-left">PACE</th>
						</tr>
					</thead>
					<tbody>
						{#each data.activities.slice(0, 15) as activity}
							<tr class="border-b border-dashed border-green-700">
								<td class="p-2 whitespace-nowrap">{formatDate(activity.start_date_local)}</td>
								<td class="p-2 max-w-48 truncate">{activity.name}</td>
								<td class="p-2">{activity.type}</td>
								<td class="p-2">{convertDistance(activity.distance)} {getDistanceUnit()}</td>
								<td class="p-2">{formatTime(activity.moving_time)}</td>
								<td class="p-2">{formatPace(activity.distance, activity.moving_time)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}

		<!-- Personal Records -->
		{#if data.longestActivity}
			<div class="my-6">
				<p class="border-b-2 border-green-500 pb-1 mb-4 text-xl">-[ PERSONAL RECORDS ({new Date().getFullYear()}) ]-</p>
				<div class="border border-dashed border-green-700 p-4">
					<p>
						<span class="text-green-300">LONGEST ACTIVITY:</span>
						{convertDistance(data.longestActivity.distance)} {getDistanceUnit()}
						<span class="text-green-300">|</span>
						<span class="italic">"{data.longestActivity.name}"</span>
						<span class="text-smol text-green-300">({formatDate(data.longestActivity.start_date_local)})</span>
					</p>
				</div>
			</div>
		{/if}

		<!-- Strava Link -->
		<div class="my-6 text-center">
			<a
				href="https://www.strava.com/athletes/mccune1224"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block px-4 py-2 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-colors"
			>
				[ VIEW FULL PROFILE ON STRAVA ]
			</a>
		</div>
	</section>
{/if}

<style lang="scss">
	.loading-container,
	.error-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
	}

	.cursor {
		animation: blink 0.7s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.loading-bar {
		width: 100%;
		max-width: 400px;
		height: 20px;
		border: 2px solid #4ade80;
		margin: 0 auto;
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: repeating-linear-gradient(
				90deg,
				transparent,
				transparent 8px,
				rgba(74, 222, 128, 0.1) 8px,
				rgba(74, 222, 128, 0.1) 16px
			);
		}
	}

	.loading-progress {
		height: 100%;
		background: linear-gradient(90deg, #4ade80, #22c55e);
		animation: load 0.5s ease-in-out forwards;
		box-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80;
	}

	@keyframes load {
		0% { width: 0%; }
		50% { width: 60%; }
		100% { width: 100%; }
	}

	.waveform {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3px;
		height: 40px;
	}

	.bar {
		width: 4px;
		background: #4ade80;
		animation: wave 0.8s ease-in-out infinite;
		animation-delay: var(--delay);
		box-shadow: 0 0 5px #4ade80;
	}

	@keyframes wave {
		0%, 100% { height: 8px; }
		50% { height: 35px; }
	}

	.stat-box {
		border: 1px dashed #22c55e;
		padding: 1rem;
		text-align: center;
	}
</style>
