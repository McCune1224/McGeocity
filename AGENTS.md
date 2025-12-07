# AGENTS.md

## Build & Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Run TypeScript/Svelte type checking
- `npm run check:watch` - Type checking in watch mode
- No test framework configured

## Tech Stack
SvelteKit 2 + Svelte 5, TypeScript (strict mode), TailwindCSS 3, SCSS, Vercel adapter

## Code Style Guidelines
- Use `lang="ts"` in all `<script>` blocks
- Use Svelte 5 runes: `$props()`, `$derived()`, `$state()`
- Import from `$lib/` alias for lib files (e.g., `import X from "$lib/components/X.svelte"`)
- Use double quotes for imports and strings in TS/JS
- Use tabs for indentation
- Component props: destructure with `$props()` and inline type annotation
- Tailwind classes for styling; SCSS in `<style lang="scss">` when needed
- File naming: PascalCase for components (e.g., `RetroButtonLink.svelte`), +page/+layout for routes
- Prefer semantic HTML elements with Tailwind responsive prefixes (sm:, md:, etc.)
