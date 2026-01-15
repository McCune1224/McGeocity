<script lang="ts">
	import type { PageServerData } from "./$types";
	import PanelBox from "$lib/components/portal/PanelBox.svelte";
	import StatCard from "$lib/components/portal/StatCard.svelte";
	import PanelButton from "$lib/components/portal/PanelButton.svelte";
	import TablePanel from "$lib/components/portal/TablePanel.svelte";
	import LoadingPanel from "$lib/components/portal/LoadingPanel.svelte";
	import PortalTransition from "$lib/components/portal/PortalTransition.svelte";

	let { data }: { data: PageServerData } = $props();

	let isLoading = $state(true);
	let useKm = $state(false);

	$effect(() => {
		if (data.stats || data.error) {
			setTimeout(() => {
				isLoading = false;
			}, 500);
		}
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
	<PortalTransition>
		<div class="flex items-center justify-center min-h-[400px]">
			<LoadingPanel message="CONNECTING TO STRAVA..." />
		</div>
	</PortalTransition>
{:else if data.error}
	<PortalTransition>
		<PanelBox title="SYSTEM ERROR" variant="default">
			<p class="text-red-600 font-mono font-bold mb-2">
				Failed to connect to Strava
			</p>
			<p class="text-sm text-gray-600">{data.error}</p>
		</PanelBox>
	</PortalTransition>
{:else}
	<PortalTransition>
		<div class="space-y-8">
			<!-- Header -->
			<PanelBox title="HEALTH CHECK" variant="interactive">
				<p class="text-gray-700">
					Year-to-date activity statistics from Strava. Track running, cycling, 
					and swimming metrics with customizable units.
				</p>
			</PanelBox>

			<!-- Unit Toggle -->
			<div class="flex gap-2">
				<span class="text-sm font-mono font-bold text-gray-600">UNITS:</span>
				<button
					onclick={() => (useKm = false)}
					class="px-4 py-2 border-2 {!useKm
						? 'border-blue-500 bg-blue-500 text-white'
						: 'border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500'} transition-smooth font-mono font-bold text-sm"
				>
					MILES
				</button>
				<button
					onclick={() => (useKm = true)}
					class="px-4 py-2 border-2 {useKm
						? 'border-blue-500 bg-blue-500 text-white'
						: 'border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500'} transition-smooth font-mono font-bold text-sm"
				>
					KILOMETERS
				</button>
			</div>

			<!-- YTD Stats -->
			<div>
				<h3 class="text-sm font-mono font-bold text-gray-600 mb-4 uppercase tracking-wider">
					Year to Date Summary
				</h3>
				<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
					<StatCard
						label="DISTANCE"
						value={convertDistance(ytdTotals.distance)}
						unit={getDistanceUnit()}
						accent="blue"
					/>
					<StatCard label="ACTIVITIES" value={ytdTotals.count} accent="orange" />
					<StatCard
						label="TIME ACTIVE"
						value={formatTime(ytdTotals.time)}
						accent="cyan"
					/>
					<StatCard
						label="AVG PACE"
						value={formatPace(ytdTotals.distance, ytdTotals.time)}
						accent="green"
					/>
				</div>
			</div>

			<!-- Monthly Breakdown -->
			{#if data.monthlyBreakdown && data.monthlyBreakdown.length > 0}
				<div>
					<h3 class="text-sm font-mono font-bold text-gray-600 mb-4 uppercase tracking-wider">
						Monthly Breakdown
					</h3>

					<!-- Desktop Table -->
					<div class="hidden md:block">
						<TablePanel
							headers={["MONTH", "DISTANCE", "ACTIVITIES", "TIME", "AVG PACE"]}
							rows={data.monthlyBreakdown.map((m) => [
								m.month,
								`${convertDistance(m.distance)} ${getDistanceUnit()}`,
								m.count,
								formatTime(m.time),
								formatPace(m.distance, m.time)
							])}
						/>
					</div>

					<!-- Mobile Cards -->
					<div class="md:hidden space-y-3">
						{#each data.monthlyBreakdown as month}
							<PanelBox title={month.month} variant="default">
								<div class="grid grid-cols-2 gap-3 text-sm">
									<div>
										<p class="text-xs font-mono text-gray-600 uppercase mb-1">Distance</p>
										<p class="font-bold text-blue-600">
											{convertDistance(month.distance)} {getDistanceUnit()}
										</p>
									</div>
									<div>
										<p class="text-xs font-mono text-gray-600 uppercase mb-1">Activities</p>
										<p class="font-bold text-orange-600">{month.count}</p>
									</div>
									<div>
										<p class="text-xs font-mono text-gray-600 uppercase mb-1">Time</p>
										<p class="font-bold text-cyan-600">{formatTime(month.time)}</p>
									</div>
									<div>
										<p class="text-xs font-mono text-gray-600 uppercase mb-1">Avg Pace</p>
										<p class="font-bold text-green-600">{formatPace(month.distance, month.time)}</p>
									</div>
								</div>
							</PanelBox>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Recent Activities -->
			{#if data.activities && data.activities.length > 0}
				<div>
					<h3 class="text-sm font-mono font-bold text-gray-600 mb-4 uppercase tracking-wider">
						Recent Activities
					</h3>

					<!-- Desktop Table -->
					<div class="hidden md:block">
						<TablePanel
							headers={["DATE", "ACTIVITY", "DISTANCE", "TIME", "AVG PACE"]}
							rows={data.activities.slice(0, 10).map((a: any) => [
								formatDate(a.start_date),
								a.type,
								`${convertDistance(a.distance)} ${getDistanceUnit()}`,
								formatTime(a.moving_time),
								formatPace(a.distance, a.moving_time)
							])}
						/>
					</div>

					<!-- Mobile Cards -->
					<div class="md:hidden space-y-3">
						{#each data.activities.slice(0, 10) as activity}
							<PanelBox title="{activity.type} - {formatDate(activity.start_date)}" variant="default">
								<div class="space-y-2 text-sm">
									{#if activity.name}
										<p class="text-gray-700">
											<span class="font-mono text-xs text-gray-600 uppercase">Name:</span>
											{activity.name}
										</p>
									{/if}
									<div class="grid grid-cols-2 gap-2">
										<div>
											<p class="text-xs font-mono text-gray-600 uppercase mb-1">Distance</p>
											<p class="font-bold text-blue-600">
												{convertDistance(activity.distance)} {getDistanceUnit()}
											</p>
										</div>
										<div>
											<p class="text-xs font-mono text-gray-600 uppercase mb-1">Time</p>
											<p class="font-bold text-cyan-600">{formatTime(activity.moving_time)}</p>
										</div>
									</div>
									<p class="text-xs text-gray-600">
										AVG PACE: {formatPace(activity.distance, activity.moving_time)}
									</p>
								</div>
							</PanelBox>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Personal Records -->
			{#if data.stats}
				<PanelBox title="PERSONAL RECORDS" variant="default">
					<div class="space-y-3 text-sm">
						{#if data.stats.biggest_ride_distance > 0}
							<div class="flex justify-between items-center pb-2 border-b border-gray-200">
								<span class="font-mono text-gray-600">Longest Ride:</span>
								<span class="font-bold text-blue-600">
									{convertDistance(data.stats.biggest_ride_distance)} {getDistanceUnit()}
								</span>
							</div>
						{/if}
						{#if data.stats.biggest_climb_elevation_gain > 0}
							<div class="flex justify-between items-center pb-2 border-b border-gray-200">
								<span class="font-mono text-gray-600">Most Elevation Gain:</span>
								<span class="font-bold text-orange-600">
									{(data.stats.biggest_climb_elevation_gain * 3.28084).toFixed(0)} ft
								</span>
							</div>
						{/if}
						<p class="text-xs text-gray-500 italic mt-4">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</div>
				</PanelBox>
			{/if}
		</div>
	</PortalTransition>
{/if}
