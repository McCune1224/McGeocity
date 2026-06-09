import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: ["selector", '[data-theme="dark"]'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
				mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', "Consolas", "monospace"],
			},
			colors: {
				"bg-primary": "rgb(var(--color-bg-primary) / <alpha-value>)",
				"bg-secondary": "rgb(var(--color-bg-secondary) / <alpha-value>)",
				"bg-tertiary": "rgb(var(--color-bg-tertiary) / <alpha-value>)",
				"text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
				"text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
				"text-tertiary": "rgb(var(--color-text-tertiary) / <alpha-value>)",
				"accent-primary": "rgb(var(--color-accent-primary) / <alpha-value>)",
				"accent-hover": "rgb(var(--color-accent-hover) / <alpha-value>)",
				"accent-secondary": "rgb(var(--color-accent-secondary) / <alpha-value>)",
				"border-primary": "rgb(var(--color-border-primary) / <alpha-value>)",
				"border-secondary": "rgb(var(--color-border-secondary) / <alpha-value>)",
				success: "rgb(var(--color-success) / <alpha-value>)",
				warning: "rgb(var(--color-warning) / <alpha-value>)",
				danger: "rgb(var(--color-danger) / <alpha-value>)",
				brand: {
					light: "#d07050",
					dark: "#e08060",
				},
			},
			maxWidth: {
				"content": "64rem",
			},
			animation: {
				"fade-up": "fadeUp 0.5s ease-out",
			},
			keyframes: {
				fadeUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},

	plugins: [typography, forms],
} satisfies Config;
