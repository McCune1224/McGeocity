import { browser } from "$app/environment";

export type Theme = "light" | "dark";

let currentTheme = $state<Theme>("light");

// Initialize from localStorage on mount
if (browser) {
	const stored = localStorage.getItem("theme") as Theme | null;
	if (stored === "light" || stored === "dark") {
		currentTheme = stored;
	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		currentTheme = "dark";
	}
}

export const themeStore = {
	get current(): Theme {
		return currentTheme;
	},

	toggle(): void {
		currentTheme = currentTheme === "light" ? "dark" : "light";
		if (browser) {
			document.documentElement.setAttribute("data-theme", currentTheme);
			localStorage.setItem("theme", currentTheme);
		}
	},

	set(theme: Theme): void {
		currentTheme = theme;
		if (browser) {
			document.documentElement.setAttribute("data-theme", currentTheme);
			localStorage.setItem("theme", currentTheme);
		}
	},

	get isDark(): boolean {
		return currentTheme === "dark";
	}
};
