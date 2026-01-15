<script lang="ts">
	import type { PageServerData } from "./$types";
	import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
	import IndustrialTable from "$lib/components/industrial/IndustrialTable.svelte";
	import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
	import IndustrialStatCard from "$lib/components/industrial/IndustrialStatCard.svelte";
	import IndustrialLoader from "$lib/components/industrial/IndustrialLoader.svelte";
	import IndustrialDivider from "$lib/components/industrial/IndustrialDivider.svelte";

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

	// Prepare monthly table data
	let monthlyTableRows = $derived(
		(data.monthlyBreakdown ?? []).map((m: any) => [
			m.month,
			`${convertDistance(m.distance)} ${getDistanceUnit()}`,
			String(m.count),
			formatTime(m.time),
			formatPace(m.distance, m.time)
		])
	);

	// Prepare activities table data
	let activitiesTableRows = $derived(
		(data.activities ?? []).slice(0, 10).map((a: any) => [
			formatDate(a.start_date),
			a.type,
			`${convertDistance(a.distance)} ${getDistanceUnit()}`,
			formatTime(a.moving_time),
			formatPace(a.distance, a.moving_time)
		])
	);
</script>

<div class="healthcheck-page">
	{#if isLoading}
		<div class="loader-container">
			<IndustrialLoader message="CONNECTING TO STRAVA..." />
		</div>
	{:else if data.error}
		<IndustrialPanel title="SYSTEM ERROR">
			<p class="error-text">Failed to connect to Strava</p>
			<p class="error-detail">{data.error}</p>
		</IndustrialPanel>
	{:else}
		<!-- Header Panel -->
		<IndustrialPanel title="HEALTH CHECK">
			<p class="intro-text">
				Year-to-date activity statistics from Strava. Track running, cycling, and swimming metrics.
			</p>
		</IndustrialPanel>

		<IndustrialDivider />

		<!-- Unit Toggle -->
		<div class="unit-toggle">
			<span class="toggle-label">UNITS:</span>
			<IndustrialButton
				label="MILES"
				onClick={() => (useKm = false)}
				variant={!useKm ? "active" : "default"}
			/>
			<IndustrialButton
				label="KILOMETERS"
				onClick={() => (useKm = true)}
				variant={useKm ? "active" : "default"}
			/>
		</div>

		<IndustrialDivider />

		<!-- YTD Stats -->
		<IndustrialPanel title="YEAR TO DATE SUMMARY">
			<div class="stats-grid">
				<IndustrialStatCard
					label="DISTANCE"
					value={convertDistance(ytdTotals.distance)}
					unit={getDistanceUnit()}
					accent="green"
				/>
				<IndustrialStatCard
					label="ACTIVITIES"
					value={ytdTotals.count}
					accent="orange"
				/>
				<IndustrialStatCard
					label="TIME ACTIVE"
					value={formatTime(ytdTotals.time)}
					accent="green"
				/>
				<IndustrialStatCard
					label="AVG PACE"
					value={formatPace(ytdTotals.distance, ytdTotals.time)}
					accent="green"
				/>
			</div>
		</IndustrialPanel>

		<!-- Monthly Breakdown -->
		{#if data.monthlyBreakdown && data.monthlyBreakdown.length > 0}
			<IndustrialDivider />

			<div class="table-view">
				<IndustrialTable
					title="MONTHLY BREAKDOWN"
					headers={["MONTH", "DISTANCE", "ACTIVITIES", "TIME", "AVG PACE"]}
					rows={monthlyTableRows}
				/>
			</div>

			<!-- Mobile Cards -->
			<div class="mobile-cards">
				<IndustrialPanel title="MONTHLY BREAKDOWN">
					<div class="month-cards">
						{#each data.monthlyBreakdown as month}
							<div class="month-card">
								<div class="month-header">{month.month}</div>
								<div class="month-stats">
									<div class="month-stat">
										<span class="stat-label">DISTANCE:</span>
										<span class="stat-value accent">{convertDistance(month.distance)} {getDistanceUnit()}</span>
									</div>
									<div class="month-stat">
										<span class="stat-label">ACTIVITIES:</span>
										<span class="stat-value">{month.count}</span>
									</div>
									<div class="month-stat">
										<span class="stat-label">TIME:</span>
										<span class="stat-value">{formatTime(month.time)}</span>
									</div>
									<div class="month-stat">
										<span class="stat-label">PACE:</span>
										<span class="stat-value">{formatPace(month.distance, month.time)}</span>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</IndustrialPanel>
			</div>
		{/if}

		<!-- Recent Activities -->
		{#if data.activities && data.activities.length > 0}
			<IndustrialDivider />

			<div class="table-view">
				<IndustrialTable
					title="RECENT ACTIVITIES"
					headers={["DATE", "TYPE", "DISTANCE", "TIME", "PACE"]}
					rows={activitiesTableRows}
				/>
			</div>

			<!-- Mobile Cards -->
			<div class="mobile-cards">
				<IndustrialPanel title="RECENT ACTIVITIES">
					<div class="activity-cards">
						{#each data.activities.slice(0, 10) as activity}
							<div class="activity-card">
								<div class="activity-header">
									<span class="activity-type">{activity.type}</span>
									<span class="activity-date">{formatDate(activity.start_date)}</span>
								</div>
								{#if activity.name}
									<p class="activity-name">{activity.name}</p>
								{/if}
								<div class="activity-stats">
									<span class="accent">{convertDistance(activity.distance)} {getDistanceUnit()}</span>
									<span class="secondary">|</span>
									<span>{formatTime(activity.moving_time)}</span>
									<span class="secondary">|</span>
									<span>{formatPace(activity.distance, activity.moving_time)}</span>
								</div>
							</div>
						{/each}
					</div>
				</IndustrialPanel>
			</div>
		{/if}

		<!-- Personal Records -->
		{#if data.stats && (data.stats.biggest_ride_distance > 0 || data.stats.biggest_climb_elevation_gain > 0)}
			<IndustrialDivider />

			<IndustrialPanel title="PERSONAL RECORDS">
				<div class="records-list">
					{#if data.stats.biggest_ride_distance > 0}
						<div class="record-row">
							<span class="record-label">LONGEST RIDE:</span>
							<span class="record-value accent">
								{convertDistance(data.stats.biggest_ride_distance)} {getDistanceUnit()}
							</span>
						</div>
					{/if}
					{#if data.stats.biggest_climb_elevation_gain > 0}
						<div class="record-row">
							<span class="record-label">MOST ELEVATION GAIN:</span>
							<span class="record-value warning">
								{(data.stats.biggest_climb_elevation_gain * 3.28084).toFixed(0)} ft
							</span>
						</div>
					{/if}
					<p class="last-updated">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>
			</IndustrialPanel>
		{/if}
	{/if}
</div>

<style lang="scss">
	.healthcheck-page {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.loader-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 400px;
	}

	.intro-text {
		color: #c9c9c9;
		line-height: 1.6;
		margin: 0;
	}

	.error-text {
		color: #aa5555;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
	}

	.error-detail {
		color: #888888;
		font-size: 0.875rem;
		margin: 0;
	}

	.unit-toggle {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.toggle-label {
		font-size: 0.875rem;
		font-weight: bold;
		color: #888888;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;

		@media (min-width: 640px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.table-view {
		@media (max-width: 768px) {
			display: none;
		}
	}

	.mobile-cards {
		@media (min-width: 769px) {
			display: none;
		}
	}

	.month-cards,
	.activity-cards {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.month-card,
	.activity-card {
		padding: 0.75rem;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
		background: #252525;
	}

	.month-header {
		font-weight: bold;
		color: #8b9a5b;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.month-stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
		font-size: 0.75rem;
	}

	.month-stat {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.stat-label {
		color: #888888;
		font-size: 0.625rem;
	}

	.stat-value {
		color: #c9c9c9;
	}

	.activity-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.activity-type {
		font-weight: bold;
		color: #8b9a5b;
		text-transform: uppercase;
	}

	.activity-date {
		color: #888888;
		font-size: 0.75rem;
	}

	.activity-name {
		color: #c9c9c9;
		font-size: 0.875rem;
		margin: 0 0 0.5rem 0;
	}

	.activity-stats {
		display: flex;
		gap: 0.5rem;
		font-size: 0.75rem;
		color: #c9c9c9;
	}

	.accent {
		color: #8b9a5b;
	}

	.warning {
		color: #d4a55b;
	}

	.secondary {
		color: #888888;
	}

	.records-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.record-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #3a3a3a;
		font-size: 0.875rem;
	}

	.record-label {
		color: #888888;
	}

	.record-value {
		font-weight: bold;
	}

	.last-updated {
		color: #888888;
		font-size: 0.75rem;
		font-style: italic;
		margin: 0.5rem 0 0 0;
	}
</style>
