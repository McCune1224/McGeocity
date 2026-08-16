# McGeocity

Personal portfolio for **Alex McCune — IT Systems Administrator & Cybersecurity Analyst**, based in Rochester, NY.

## Live Site

https://alexmccune.dev

## Features

- **Single-page layout** — hero, experience, education, skills, certifications, projects, and contact all scroll-linked from the navbar
- **Ember theme** — warm, hand-crafted color system with full light / dark mode (persisted, respects `prefers-color-scheme`)
- **Projects** — pinned personal projects with live demos, tech tags, and source links
- **Accessible** — keyboard navigable, skip-to-content, `prefers-reduced-motion` support, WCAG AA contrast
- **SEO-ready** — Open Graph, Twitter cards, JSON-LD Person schema, sitemap, robots.txt
- **Deployed on Vercel** with continuous deployment

## Tech Stack

SvelteKit 2, Svelte 5 (runes), TypeScript (strict), TailwindCSS 3, SCSS, Vercel

## Development

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production (Vercel adapter)
npm run preview      # Preview the production build locally
npm run check        # TypeScript/Svelte type checking (strict mode)
```

> **Note:** Changes require review before deploying. `npm run dev` to test locally, and never push to `main` without approval.