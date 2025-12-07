import type { PageServerLoad } from "./$types";
import {
	STRAVA_CLIENT_ID,
	STRAVA_CLIENT_SECRET,
	STRAVA_REFRESH_TOKEN,
} from "$env/static/private";

export type StravaActivity = {
	id: number;
	name: string;
	distance: number;
	moving_time: number;
	elapsed_time: number;
	total_elevation_gain: number;
	type: string;
	sport_type: string;
	start_date: string;
	start_date_local: string;
	average_speed: number;
	max_speed: number;
	average_heartrate?: number;
	max_heartrate?: number;
	kudos_count: number;
};

export type StravaAthleteStats = {
	biggest_ride_distance: number;
	biggest_climb_elevation_gain: number;
	recent_run_totals: StravaTotals;
	all_run_totals: StravaTotals;
	recent_swim_totals: StravaTotals;
	all_swim_totals: StravaTotals;
	recent_ride_totals: StravaTotals;
	all_ride_totals: StravaTotals;
	ytd_run_totals: StravaTotals;
	ytd_swim_totals: StravaTotals;
	ytd_ride_totals: StravaTotals;
};

export type StravaTotals = {
	count: number;
	distance: number;
	moving_time: number;
	elapsed_time: number;
	elevation_gain: number;
};

export type MonthlyBreakdown = {
	month: string;
	monthNum: number;
	distance: number;
	count: number;
	time: number;
};

export type HealthcheckData = {
	stats: StravaAthleteStats | null;
	activities: StravaActivity[];
	monthlyBreakdown: MonthlyBreakdown[];
	longestActivity: StravaActivity | null;
	error: string | null;
};

async function refreshAccessToken(): Promise<string | null> {
	try {
		const response = await fetch("https://www.strava.com/oauth/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				client_id: STRAVA_CLIENT_ID,
				client_secret: STRAVA_CLIENT_SECRET,
				refresh_token: STRAVA_REFRESH_TOKEN,
				grant_type: "refresh_token",
			}),
		});

		if (!response.ok) {
			console.error("Token refresh failed:", response.statusText);
			return null;
		}

		const data = await response.json();
		return data.access_token;
	} catch (error) {
		console.error("Token refresh error:", error);
		return null;
	}
}

async function getAthleteId(accessToken: string): Promise<number | null> {
	try {
		const response = await fetch("https://www.strava.com/api/v3/athlete", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		if (!response.ok) {
			console.error("Get athlete failed:", response.statusText);
			return null;
		}

		const data = await response.json();
		return data.id;
	} catch (error) {
		console.error("Get athlete error:", error);
		return null;
	}
}

async function getAthleteStats(
	accessToken: string,
	athleteId: number
): Promise<StravaAthleteStats | null> {
	try {
		const response = await fetch(
			`https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		if (!response.ok) {
			console.error("Get stats failed:", response.statusText);
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error("Get stats error:", error);
		return null;
	}
}

async function getActivities(
	accessToken: string
): Promise<StravaActivity[]> {
	try {
		// Get activities from the start of the current year
		const startOfYear = new Date(new Date().getFullYear(), 0, 1);
		const after = Math.floor(startOfYear.getTime() / 1000);

		const allActivities: StravaActivity[] = [];
		let page = 1;
		const perPage = 100;
		let hasMore = true;

		while (hasMore) {
			const response = await fetch(
				`https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}&page=${page}&after=${after}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			if (!response.ok) {
				console.error("Get activities failed:", response.statusText);
				break;
			}

			const activities: StravaActivity[] = await response.json();
			allActivities.push(...activities);

			// If we got fewer than perPage, we've reached the end
			if (activities.length < perPage) {
				hasMore = false;
			} else {
				page++;
				// Safety limit to avoid infinite loops
				if (page > 10) {
					hasMore = false;
				}
			}
		}

		return allActivities;
	} catch (error) {
		console.error("Get activities error:", error);
		return [];
	}
}

function groupActivitiesByMonth(activities: StravaActivity[]): MonthlyBreakdown[] {
	const monthNames = [
		"JAN", "FEB", "MAR", "APR", "MAY", "JUN",
		"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
	];

	const monthlyMap = new Map<number, MonthlyBreakdown>();

	// Initialize all months up to current month
	const currentMonth = new Date().getMonth();
	for (let i = 0; i <= currentMonth; i++) {
		monthlyMap.set(i, {
			month: monthNames[i],
			monthNum: i,
			distance: 0,
			count: 0,
			time: 0,
		});
	}

	// Aggregate activities
	for (const activity of activities) {
		const date = new Date(activity.start_date_local);
		const month = date.getMonth();

		const existing = monthlyMap.get(month);
		if (existing) {
			existing.distance += activity.distance;
			existing.count += 1;
			existing.time += activity.moving_time;
		}
	}

	return Array.from(monthlyMap.values()).sort((a, b) => a.monthNum - b.monthNum);
}

function findLongestActivity(activities: StravaActivity[]): StravaActivity | null {
	if (activities.length === 0) return null;
	return activities.reduce((longest, current) =>
		current.distance > longest.distance ? current : longest
	);
}

export const load: PageServerLoad = async (): Promise<HealthcheckData> => {
	// Check if env vars are configured
	if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
		return {
			stats: null,
			activities: [],
			monthlyBreakdown: [],
			longestActivity: null,
			error: "STRAVA API NOT CONFIGURED",
		};
	}

	// Refresh access token
	const accessToken = await refreshAccessToken();
	if (!accessToken) {
		return {
			stats: null,
			activities: [],
			monthlyBreakdown: [],
			longestActivity: null,
			error: "STRAVA AUTH FAILED - TOKEN EXPIRED",
		};
	}

	// Get athlete ID
	const athleteId = await getAthleteId(accessToken);
	if (!athleteId) {
		return {
			stats: null,
			activities: [],
			monthlyBreakdown: [],
			longestActivity: null,
			error: "FAILED TO FETCH ATHLETE DATA",
		};
	}

	// Fetch stats and activities in parallel
	const [stats, activities] = await Promise.all([
		getAthleteStats(accessToken, athleteId),
		getActivities(accessToken),
	]);

	if (!stats) {
		return {
			stats: null,
			activities: [],
			monthlyBreakdown: [],
			longestActivity: null,
			error: "FAILED TO FETCH STRAVA STATS",
		};
	}

	const monthlyBreakdown = groupActivitiesByMonth(activities);
	const longestActivity = findLongestActivity(activities);

	return {
		stats,
		activities,
		monthlyBreakdown,
		longestActivity,
		error: null,
	};
};
