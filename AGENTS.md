# AGENTS.md — Alex McCune Professional Portfolio

---

## !!!! IMPORTANT: DO NOT PUSH TO PRODUCTION !!!!

**All changes MUST be reviewed and approved by the user before deploying to production.**

- Run `npm run dev` to test locally
- Get explicit user approval before running `git push`
- Never force push or deploy without confirmation

---

## Overview

Professional portfolio for **Alex McCune**, an **IT System Administrator & Cybersecurity Analyst** based in Rochester, NY. This is a complete redesign from the previous Half-Life 1 / CS 1.6 industrial UI into a clean, corporate-modern professional portfolio targeting enterprise IT and cybersecurity roles.

**Live Site:** https://alexmccune.dev (DO NOT PUSH without approval)

**Design Direction:** Clean / Corporate Modern with Ember theme — a warm, hand-crafted color system featuring graphite backgrounds, muted olive/gold tones, and a vivid coral accent. Single-page scroll layout optimized for recruiter scanning.

**Reference Sites (for layout/UX inspiration):**
- https://auspham.dev/ — clean single-page structure, GitHub integration, tech stack grid
- https://jasoncameron.dev/ — directory-tree-style navigation breadcrumbs, theme system

---

## Build & Development Commands

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production (Vercel adapter)
npm run check        # Run TypeScript/Svelte type checking (strict mode)
npm run check:watch  # Continuous type checking during development
```

**No test framework configured.**

---

## Tech Stack

- **Framework:** SvelteKit 2 + Svelte 5 (runes API)
- **Language:** TypeScript 5 (strict mode enabled)
- **Styling:** TailwindCSS 3 + SCSS (via sass-embedded)
- **Font:** Inter (self-hosted or via Google Fonts / @fontsource)
- **Deployment:** Vercel (@sveltejs/adapter-vercel)
- **Build Tool:** Vite 5.4
- **CSS Processing:** PostCSS + Autoprefixer

---

## Personal Brand

| Field | Value |
|-------|-------|
| **Full Name** | Alex McCune |
| **Title** | IT Systems Administrator |
| **Location** | Rochester, NY |
| **Domain** | alexmccune.dev |
| **GitHub** | github.com/mccune1224 |
| **LinkedIn** | linkedin.com/in/mccune1224 |
| **Bluesky** | bsky.app/profile/mckusa.bsky.social |
| **Substack** | mccune1224.substack.com |
| **Status** | Open to Opportunities |

### Bio Summary (from current About page — to be repurposed)

Alex McCune is an IT Systems Administrator with 3+ years of experience managing enterprise infrastructure, automating operations, and ensuring system reliability at scale. He currently administers applications and identity systems for a major healthcare network. His expertise spans Windows Server, Active Directory, automation (PowerShell, Python, Bash), ITIL change management, and disaster recovery planning.

---

## Site Structure — Single Page

All content lives on a single page (`/` — `src/routes/+page.svelte`) with these sections, scroll-linked via the navbar:

| # | Section ID | Content |
|---|-----------|---------|
| 1 | `#hero` | Name, title, tagline, location, status badge, CTA buttons (Resume, Contact) |
| 2 | `#experience` | Career timeline — roles, dates, key achievements |
| 3 | `#skills` | Skills grid — categorized by domain (OS, Cloud, Security Tools, Languages, etc.) |
| 4 | `#certifications` | Cert badges/cards — current + in-progress |
| 5 | `#projects` | Pinned projects — GitHub repos and personal projects with descriptions |
| 6 | `#contact` | Contact info, social links, public key (optional), direct email |

### Pages to Remove
- `/about` — content absorbed into hero + experience sections
- `/projects` — becomes the `#projects` section
- `/music` — removed (not relevant to professional portfolio)
- `/healthcheck` — removed (Strava integration not relevant)
- `/layarteb` — removed (easter egg page)

---

## Navigation Design — Split Layout

Clean, minimal navbar:

```
┌─────────────────────────────────────────────────────────┐
│  [AM]    Experience  Skills  Certs  Projects  Contact  ↓  ☀│
└─────────────────────────────────────────────────────────┘
```

- **Left side:** "AM" monogram in accent-colored rounded square — links to top of page
- **Right side:** Section links, GitHub/LinkedIn/Substack social icons, resume download icon, dark mode toggle
- **Active section:** Subtle underline accent bar beneath active link
- **Sticky:** Navbar stays fixed at top, backdrop blur on scroll
- **Mobile:** Hamburger icon → full-width slide-down menu

---

## Design System: Ember Theme

### Theme Strategy — Dual Mode

The site supports light and dark modes via a toggle, using CSS custom properties. Tailwind's `dark:` variant is driven by a `data-theme` attribute on `<html>`.

```html
<html data-theme="light">  <!-- or data-theme="dark" -->
```

### Light Mode — Ember Light (Warm Off-White + Coral)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#faf6f0` | Page background (warm cream) |
| `--bg-secondary` | `#f0eadd` | Section/card background |
| `--bg-tertiary` | `#e5dcc8` | Hover states, subtle highlights |
| `--text-primary` | `#2c2822` | Headings, body text |
| `--text-secondary` | `#5c5448` | Muted text, captions |
| `--text-tertiary` | `#8c8478` | Very muted, metadata |
| `--accent-primary` | `#d07050` | Links, buttons, active states (coral) |
| `--accent-hover` | `#b85c3c` | Hover state for accent elements |
| `--accent-secondary` | `#8b7a40` | Secondary accent (gold) |
| `--border-primary` | `#e0d6c4` | Card/section borders |
| `--border-secondary` | `#ccc0a8` | Stronger borders |
| `--success` | `#6b7848` | Positive indicators (olive) |
| `--warning` | `#8b7a40` | Warnings (gold) |
| `--danger` | `#c06060` | Errors (rose) |

### Dark Mode — Ember Dark (Warm Graphite + Coral)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#1c1b19` | Page background (warm graphite) |
| `--bg-secondary` | `#2a2826` | Section/card background |
| `--bg-tertiary` | `#3e3c38` | Hover states, subtle highlights |
| `--text-primary` | `#d8d0c0` | Headings, body text (warm ivory) |
| `--text-secondary` | `#b0a898` | Muted text, captions |
| `--text-tertiary` | `#787068` | Very muted, metadata |
| `--accent-primary` | `#e08060` | Links, buttons, active states (coral ember) |
| `--accent-hover` | `#d07050` | Hover state for accent elements |
| `--accent-secondary` | `#c8b468` | Secondary accent (warm gold) |
| `--border-primary` | `#3e3c38` | Card/section borders |
| `--border-secondary` | `#4a4844` | Stronger borders |
| `--success` | `#8a9868` | Positive indicators (olive) |
| `--warning` | `#c8b468` | Warnings (gold) |
| `--danger` | `#b07878` | Errors (dried rose) |

### Typography — Inter

| Role | Weight | Size | Line Height |
|------|--------|------|-------------|
| Hero Name | 700 (Bold) | 3rem (48px) / 2.25rem mobile | 1.1 |
| Hero Title | 400 (Regular) | 1.25rem (20px) | 1.5 |
| Section Headers | 600 (Semi-Bold) | 1.5rem (24px) | 1.3 |
| Sub-headers | 600 | 1.125rem (18px) | 1.4 |
| Body | 400 | 1rem (16px) | 1.6 |
| Body Small | 400 | 0.875rem (14px) | 1.5 |
| Caption/Label | 500 (Medium) | 0.75rem (12px) | 1.4 |
| Nav Items | 500 | 0.875rem (14px) | 1.0 |

- **Font import:** `@fontsource/inter` (npm package) or Google Fonts CDN
- **Monospace fallback** (for code/technical snippets): `"JetBrains Mono", "Fira Code", "Cascadia Code", monospace`

### Spacing Scale

| Token | Size | Tailwind | Usage |
|-------|------|----------|-------|
| Section gap | 5rem (80px) | `py-20` | Between major sections |
| Content gap | 2rem (32px) | `gap-8` | Between content blocks |
| Card padding | 1.5rem (24px) | `p-6` | Inside cards |
| Element gap | 1rem (16px) | `gap-4` | Between related elements |
| Tight gap | 0.5rem (8px) | `gap-2` | Tight groupings |

### Responsive Breakpoints

- **Mobile first:** Default styles for mobile
- **sm:** 640px — Large phones / small tablets
- **md:** 768px — Tablets
- **lg:** 1024px — Small desktops
- **xl:** 1280px — Standard desktops

Max content width: `max-w-5xl` (1024px) or `max-w-6xl` (1152px) centered.

---

## Component Library

### Directory Structure

```
src/lib/components/
├── Navbar.svelte              # Directory-tree style nav with dark mode toggle
├── HeroSection.svelte         # Landing section with name/title/CTAs
├── ExperienceSection.svelte   # Career timeline
├── SkillsSection.svelte       # Skills grid by category
├── CertificationsSection.svelte # Cert badges/cards
├── ProjectsSection.svelte     # Project cards from GitHub + personal
├── ContactSection.svelte      # Contact info and social links
├── SectionHeading.svelte      # Reusable section header component
├── SkillBadge.svelte          # Individual skill tag/badge
├── TimelineItem.svelte        # Single career timeline entry
├── ProjectCard.svelte         # Individual project display card
├── CertCard.svelte            # Individual certification display
├── ThemeToggle.svelte         # Dark/light mode toggle button
├── Footer.svelte              # Page footer
└── SEO.svelte                 # Reusable SEO head component
```

### Component Specs

#### Navbar
- Fixed/sticky at top, `z-50`
- Left: "AM" monogram button (coral accent background, white text, rounded square)
- Right: section links, GitHub/LinkedIn/Substack social icons, resume download icon, theme toggle
- Active section: subtle underline bar beneath active link
- Pipe divider between social icons and actions
- Mobile: hamburger icon → full-width slide-down menu with social links + resume
- Backdrop blur on scroll (`backdrop-blur-md bg-ember-light/85 dark:bg-ember-dark/85`)

#### HeroSection
- Full viewport height minus navbar (`min-h-[calc(100vh-4rem)]`)
- Large name in bold Inter
- Title/subtitle below name
- Location with small map pin icon
- Status badge: "Open to Opportunities" with green dot
- Two CTA buttons: "Download Resume" (outline) + "Get in Touch" (filled accent)
- Subtle background geometric pattern or gradient (optional, keep clean)

#### ExperienceSection
- Vertical timeline with entries from About page data:
  - 2024-Present: Application Administrator — Healthcare systems, security tooling, automation
  - 2023-2024: IT Support Specialist — Help desk, system troubleshooting
  - 2023: Relocation — Moved to Rochester, NY
  - 2020-2023: Self-Directed Learning — Programming, infrastructure, security
- Timeline marker: accent-colored dot or vertical line
- Each entry: period (muted), role (bold), description (body)
- Expandable: show key achievements/bullets on click (optional)

#### SkillsSection
- Skills grouped by category:
  - **Operating Systems:** Linux (Ubuntu, CentOS, Kali), Windows Server, macOS
  - **Security Tools:** Wireshark, Nmap, Metasploit, Burp Suite, Splunk, ELK Stack
  - **Cloud & Infrastructure:** AWS, Docker, Terraform (basics), VMware
  - **Networking:** TCP/IP, DNS, DHCP, VPN, Firewalls (pfSense, iptables)
  - **Scripting & Automation:** Python, Bash, PowerShell
  - **Compliance:** HIPAA, NIST CSF, OWASP Top 10
- Grid layout: 2-3 columns on desktop, 1 on mobile
- Each category: header + horizontal list of skill badges

#### CertificationsSection
- Card grid: 2-3 columns
- Each card: cert name, issuing org, badge/logo, status (earned vs. in-progress)
- In-progress certs have a distinct visual treatment (dashed border, progress indicator)
- Certifications to display (confirm with Alex):
  - Security+ (in progress)
  - Network+ (if applicable)
  - Any other earned certs

#### ProjectsSection
- Grid of project cards (1-3 columns responsive)
- Each card: project name, description, tech tags, GitHub link
- Pull from current project data / pinned GitHub repos
- "View on GitHub" link on each card
- Option for personal/homelab projects not on GitHub

#### ContactSection
- Clean, minimal section
- Email link (with copy-to-clipboard option)
- Social links row: GitHub, LinkedIn, Bluesky, Substack
- Optional: PGP public key link (if relevant for security roles)
- Location line: Rochester, NY

---

## Dark Mode Implementation

### Approach
Use a `data-theme` attribute on `<html>` toggled by a Svelte store. Tailwind's `darkMode: "selector"` config maps to `data-theme="dark"`.

### Theme Toggle
- Icon button in navbar (sun in dark mode, moon in light mode)
- Smooth transition on color properties (`transition-colors duration-300`)
- Respects `prefers-color-scheme` on first visit, then stores preference in `localStorage`
- No flash of wrong theme (use a blocking `<script>` in `<head>` or SvelteKit's `app.html`)

### Tailwind Config Addition

```typescript
// tailwind.config.ts
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      colors: {
        // Custom accent colors for consistency
        brand: {
          light: "#d07050",  // coral
          dark: "#e08060",   // coral ember
        },
      },
    },
  },
};
```

---

## Animations & Effects

### Principles
- **Subtle, not flashy** — this is a professional portfolio, not a gaming site
- **Purpose-driven** — animations guide attention, not distract
- **Respect reduced motion** — all animations disabled for `prefers-reduced-motion`

### Specific Effects
- **Section entrance:** Fade-up on scroll into view (`opacity 0→1, translateY 20px→0`), once only
- **Navbar:** Subtle shadow + backdrop blur on scroll
- **Skill badges:** Subtle scale on hover (`scale-105`)
- **Project cards:** Subtle border color shift on hover
- **Theme toggle:** Smooth color transitions across all themed elements
- **Smooth scroll:** `scroll-behavior: smooth` on `<html>`

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility (WCAG AA Minimum)

### Color Contrast
- Light mode: #0f172a text on #ffffff = 15.2:1 (AAA) ✓
- Dark mode: #f1f5f9 text on #0f172a = 13.8:1 (AAA) ✓
- Accent links: Verify #2563eb on white (6.1:1, AA) and #14b8a6 on charcoal (5.0:1, AA)

### Keyboard Navigation
- Full tab order through all interactive elements
- Visible focus rings (`outline-2 outline-offset-2`)
- Skip-to-content link (visually hidden, focusable)
- Nav links work with Enter key

### Screen Readers
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- `aria-label` on icon-only buttons (theme toggle)
- Proper heading hierarchy (h1 → h2 → h3)
- `aria-current="true"` on active nav item
- Alt text on any images (cert badges, project screenshots)

---

## Code Style Guidelines

### TypeScript & Svelte 5

- Use `lang="ts"` in all `<script>` blocks
- Strict TypeScript (strictNullChecks, noImplicitAny)
- Use Svelte 5 runes exclusively:
  - `$props()` for component props with inline type annotations
  - `$state()` for reactive state
  - `$derived()` for computed values
  - `$effect()` for side effects and lifecycle
- No `$:` reactive statements (Svelte 4 legacy syntax)

### Imports & Structure

- Import from `$lib/` alias
- Use double quotes for all string literals
- Organize imports: Svelte → external libs → internal modules → types
- Prefer named exports for components

### Indentation & Formatting

- Use **tabs** (not spaces) for indentation
- Single-line props when feasible, multi-line for 3+ props
- Semantic HTML with accessibility attributes

### Component Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `HeroSection.svelte` |
| Routes | +page.svelte, +layout.svelte | File convention |
| Stores | camelCase | `themeStore.ts` |
| Types | PascalCase | `Project`, `TimelineEntry` |
| Variables | camelCase | `isDarkMode`, `activeSection` |

### Styling Approach

- **Tailwind first** — utility classes for layout, spacing, colors
- **SCSS for complex** — animations, keyframes, complex selectors
- **CSS custom properties** — theme colors via `:root` / `[data-theme="dark"]`
- **No inline styles** — use Tailwind classes or `<style>` block
- **Dark mode:** Use Tailwind `dark:` prefix for all themed properties

---

## Content Migration Guide

### What to Keep (from current site)

1. **About page data** → Migrate into `HeroSection` (bio) + `ExperienceSection` (timeline)
   - File: `src/routes/about/+page.svelte` (read-only reference)
   - Timeline entries, bio text, motivations, contact info
2. **Projects data** → Migrate into `ProjectsSection`
   - File: `src/routes/projects/+page.svelte` (read-only reference)
   - Project names, descriptions, tech tags, GitHub links

### What to Remove

| Route | Reason |
|-------|--------|
| `/about` | Content absorbed into single-page sections |
| `/projects` | Content absorbed into single-page sections |
| `/music` | Not professional portfolio material |
| `/healthcheck` | Strava integration not relevant |
| `/layarteb` | Easter egg not relevant |
| `/experience` | Content merged into `#experience` section |
| `/contact` | Content merged into `#contact` section |

### Deprecated Components (Delete All)

```
src/lib/components/industrial/   # All industrial components
src/lib/components/portal/       # All portal components
src/lib/components/Socials.svelte
src/lib/components/TerminalLine.svelte
src/lib/components/RetroButtonLink.svelte
src/lib/styles/industrial.scss   # Old theme styles
src/lib/styles/animations.scss   # Replace with new animations
```

---

## Development Workflow

### Before Starting
1. Read this AGENTS.md for design system
2. Run `npm run dev` to start development
3. Read reference files (about page, projects page) for content to migrate

### During Development
1. Use `npm run dev` for hot reload
2. Run `npm run check:watch` for continuous type checking
3. Test at multiple breakpoints (mobile, tablet, desktop)
4. Test both light and dark modes
5. Verify all sections scroll-link correctly
6. Check keyboard navigation and screen reader accessibility

### Before Committing
1. Run `npm run check` — no TypeScript errors
2. Run `npm run build` — production build succeeds
3. Test all sections locally in both themes
4. Verify dark mode toggle persists across page reloads
5. Write descriptive commit message

### Before Production
**!!!! CRITICAL !!!!**
1. **DO NOT** run `git push` without user approval
2. Show user the changes via dev server
3. Get explicit "ok to push" confirmation
4. Only then deploy to production

---

## Environment Variables

The redesign likely does not need API integrations (Strava, Spotify are removed). Keep the `.env` file intact but these will no longer be used:

```
SPOTIFY_CLIENT_ID        # (no longer used)
SPOTIFY_CLIENT_SECRET    # (no longer used)
STRAVA_CLIENT_ID         # (no longer used)
STRAVA_CLIENT_SECRET     # (no longer used)
STRAVA_REFRESH_TOKEN     # (no longer used)
```

If GitHub API is used to fetch live project data, a `GITHUB_TOKEN` may be needed (rate limits). Otherwise, projects are hardcoded/static.

---

## Useful References

- **SvelteKit Docs:** https://kit.svelte.dev
- **Svelte 5 Runes:** https://svelte.dev/docs/svelte
- **TailwindCSS Docs:** https://tailwindcss.com
- **Tailwind Dark Mode:** https://tailwindcss.com/docs/dark-mode
- **Inter Font:** https://rsms.me/inter/ or `@fontsource/inter` on npm
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **auspham.dev:** Reference for clean single-page structure
- **jasoncameron.dev:** Reference for directory-tree navbar style

---

## REMINDER: DO NOT PUSH TO PRODUCTION WITHOUT USER APPROVAL

Last Updated: June 9, 2026
