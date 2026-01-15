# AGENTS.md - McGeocity Industrial UI Portfolio

---

## !!!! IMPORTANT: DO NOT PUSH TO PRODUCTION !!!!

**All changes MUST be reviewed and approved by the user before deploying to production.**

- Run `npm run dev` to test locally
- Get explicit user approval before running `git push`
- Never force push or deploy without confirmation

---

## Overview

McGeocity is a personal portfolio website featuring a **Half-Life 1 / Counter-Strike 1.6 industrial UI aesthetic**. The site showcases projects, music playlists, running activities, and includes interactive elements inspired by classic Valve game menus with beveled panels, dark backgrounds, and olive green accents.

**Live Site:** https://mcgeocity.vercel.app (DO NOT PUSH without approval)

**Design Era:** Half-Life 1 / CS 1.6 industrial aesthetic (dark panels, beveled edges, monospace fonts, olive green accents)

---

## Build & Development Commands

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production (Vercel adapter)
npm run check        # Run TypeScript/Svelte type checking (strict mode)
npm run check:watch  # Continuous type checking during development
```

**No test framework configured**

---

## Tech Stack

- **Framework:** SvelteKit 2 + Svelte 5 (latest runes API)
- **Language:** TypeScript 5 (strict mode enabled)
- **Styling:** TailwindCSS 3 + SCSS (via sass-embedded)
- **UI Library:** Tailwind Forms + Typography plugins
- **Deployment:** Vercel (@sveltejs/adapter-vercel)
- **Build Tool:** Vite 5.4
- **CSS Processing:** PostCSS + Autoprefixer

---

## Code Style Guidelines

### TypeScript & Svelte

- Use `lang="ts"` in all `<script>` blocks
- Enable strict mode TypeScript (strictNullChecks, noImplicitAny)
- Use Svelte 5 runes exclusively:
  - `$props()` for component props with inline type annotations
  - `$state()` for reactive state
  - `$derived()` for computed values
  - `$effect()` for side effects and lifecycle

### Imports & Structure

- Import components from `$lib/` alias (e.g., `import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte"`)
- Use double quotes for all imports and string literals in TS/JS
- Organize imports: Svelte -> external libs -> internal modules -> types
- Prefer named exports for components

### Indentation & Formatting

- Use **tabs** (not spaces) for indentation throughout
- Component props: destructure with `$props()` on single line when possible
- Maintain semantic HTML with accessibility in mind

### Component Naming

- **Components:** PascalCase (e.g., `IndustrialPanel.svelte`, `IndustrialButton.svelte`)
- **Routes:** Use +page.svelte, +layout.svelte, +page.server.ts conventions
- **Types:** PascalCase (e.g., `Project`, `SpotifyPlaylist`)
- **Variables:** camelCase (e.g., `isLoading`, `panelHeight`)

### Styling Approach

- **Tailwind:** Primary styling with utility classes
- **Responsive:** Use Tailwind breakpoints (sm:, md:, lg:) for mobile-first design
- **SCSS:** Use `<style lang="scss">` for complex effects (bevels, gradients)
- **No CSS Modules:** Global styles via app.css, scoped styles in components

---

## Design System: Half-Life 1 / CS 1.6 Industrial

### Color Palette

#### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| Main Background | `#1a1a1a` | Page background (near-black) |
| Panel Background | `#2d2d2d` | Panel/card backgrounds |
| Sunken Background | `#252525` | Pressed buttons, inputs |
| Raised Highlight | `#3a3a3a` | Raised panel gradient top |

#### Border Colors (3D Bevel Effect)
| Name | Hex | Usage |
|------|-----|-------|
| Light Edge | `#4a4a4a` | Top/left border (raised) |
| Dark Edge | `#1a1a1a` | Bottom/right border (raised) |

#### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| HL1 Olive Green | `#8b9a5b` | Primary accent, active states |
| Amber/Orange | `#d4a55b` | Warnings, highlights |
| Danger Red | `#aa5555` | Errors, destructive actions |

#### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Text | `#c9c9c9` | Main body text |
| Secondary Text | `#888888` | Muted/helper text |
| Accent Text | `#8b9a5b` | Highlighted text (olive) |

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --bg-main: #1a1a1a;
  --bg-panel: #2d2d2d;
  --bg-sunken: #252525;
  --bg-raised: #3a3a3a;
  
  /* Borders */
  --border-light: #4a4a4a;
  --border-dark: #1a1a1a;
  
  /* Accents */
  --accent-green: #8b9a5b;
  --accent-orange: #d4a55b;
  --accent-red: #aa5555;
  
  /* Text */
  --text-primary: #c9c9c9;
  --text-secondary: #888888;
  --text-accent: #8b9a5b;
}
```

### Typography

#### Font Stack
- **Monospace (primary):** `"Courier New", Consolas, "Liberation Mono", monospace`
  - Used for: All text (industrial/terminal feel)
- **System fallback:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - Used for: Fallback only

#### Font Sizes
| Name | Size | Usage |
|------|------|-------|
| XL | 1.5rem (24px) | Page titles |
| LG | 1.25rem (20px) | Section headers |
| MD | 1rem (16px) | Body text |
| SM | 0.875rem (14px) | Secondary text |
| XS | 0.75rem (12px) | Captions, metadata |

#### Text Styles
- **Headers:** Uppercase, bold, letter-spacing: 0.05em
- **Body:** Regular weight, line-height: 1.6
- **Labels:** Uppercase, small, muted color

### Border & Bevel Effects

#### Raised Panel (Default State)
```scss
.industrial-raised {
  border: 2px solid;
  border-color: var(--border-light) var(--border-dark) var(--border-dark) var(--border-light);
  background: linear-gradient(180deg, var(--bg-raised) 0%, var(--bg-panel) 100%);
}
```

#### Sunken Panel (Pressed/Input State)
```scss
.industrial-sunken {
  border: 2px solid;
  border-color: var(--border-dark) var(--border-light) var(--border-light) var(--border-dark);
  background: var(--bg-sunken);
}
```

#### Button States
```scss
.btn-industrial {
  // Default: raised
  @extend .industrial-raised;
  
  &:hover {
    border-color: #5a5a5a #2a2a2a #2a2a2a #5a5a5a;
    background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
  }
  
  &:active {
    // Pressed: sunken
    @extend .industrial-sunken;
    transform: translateY(1px);
  }
}
```

### Spacing Scale

| Name | Size | Tailwind | Usage |
|------|------|----------|-------|
| xs | 0.25rem (4px) | `p-1` | Micro spacing |
| sm | 0.5rem (8px) | `p-2` | Tight grouping |
| md | 1rem (16px) | `p-4` | Standard spacing |
| lg | 1.5rem (24px) | `p-6` | Section spacing |
| xl | 2rem (32px) | `p-8` | Major section gaps |

### Responsive Breakpoints

- **Mobile first:** Default styles for mobile
- **sm:** 640px - Tablets
- **md:** 768px - Small desktops
- **lg:** 1024px - Standard desktops
- **xl:** 1280px - Large displays

---

## Component Library: Industrial

### Directory Structure

```
src/lib/components/industrial/
├── IndustrialPanel.svelte      # Main content container
├── IndustrialButton.svelte     # Interactive button with bevel
├── IndustrialMenuBar.svelte    # CS1.6 style navigation header
├── IndustrialTable.svelte      # Data table with grid lines
├── IndustrialStatCard.svelte   # Metric display card
├── IndustrialLoader.svelte     # Loading state with progress
└── IndustrialDivider.svelte    # Horizontal separator
```

### Component Documentation

#### IndustrialPanel

Main container for content sections with beveled edges.

```svelte
<IndustrialPanel title="Section Title" variant="default">
  <p>Content goes here</p>
</IndustrialPanel>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | undefined | Optional header title |
| variant | "default" \| "sunken" | "default" | Panel style |
| children | Snippet | required | Panel content |

#### IndustrialButton

Interactive button with 3D bevel effect.

```svelte
<IndustrialButton label="Click Me" onClick={handleClick} />
<IndustrialButton label="Go to Page" href="/page" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Button text |
| onClick | () => void | undefined | Click handler |
| href | string | undefined | Link destination |
| variant | "default" \| "active" | "default" | Button style |
| disabled | boolean | false | Disabled state |

#### IndustrialMenuBar

CS1.6 style horizontal navigation with tabs.

```svelte
<IndustrialMenuBar 
  title="MCGEOCITY" 
  items={[
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" }
  ]}
  currentPath={$page.url.pathname}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | required | Site title/logo text |
| items | NavItem[] | required | Navigation items |
| currentPath | string | "/" | Current route path |
| onFullscreen | () => void | undefined | Fullscreen toggle |

#### IndustrialTable

Console-style data table.

```svelte
<IndustrialTable 
  headers={["Name", "Value"]}
  rows={[
    ["Item 1", "100"],
    ["Item 2", "200"]
  ]}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| headers | string[] | required | Column headers |
| rows | string[][] | required | Table data rows |

#### IndustrialStatCard

Metric display with industrial styling.

```svelte
<IndustrialStatCard 
  label="DISTANCE"
  value="42.5"
  unit="km"
  accent="green"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Stat label |
| value | string \| number | required | Stat value |
| unit | string | undefined | Unit suffix |
| accent | "green" \| "orange" \| "red" | "green" | Accent color |

#### IndustrialLoader

Loading state with Half-Life style progress bar.

```svelte
<IndustrialLoader message="Loading data..." />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| message | string | "Loading..." | Loading message |

#### IndustrialDivider

Horizontal separator with industrial styling.

```svelte
<IndustrialDivider />
```

No props required.

---

## Directory Structure

```
/home/mckusa/Code/McGeocity/
├── src/
│   ├── routes/
│   │   ├── +page.svelte              # Home page
│   │   ├── +layout.svelte            # Root layout with menu bar
│   │   ├── +layout.server.ts         # Layout server logic
│   │   ├── about/
│   │   │   └── +page.svelte          # About/blog section
│   │   ├── projects/
│   │   │   └── +page.svelte          # Projects showcase
│   │   ├── music/
│   │   │   ├── +page.svelte          # Spotify playlists
│   │   │   └── +page.server.ts       # Spotify API integration
│   │   ├── healthcheck/
│   │   │   ├── +page.svelte          # Strava stats
│   │   │   └── +page.server.ts       # Strava API integration
│   │   └── layarteb/                 # Easter egg (keep retro style)
│   │       ├── +page.svelte
│   │       ├── +page.server.ts
│   │       └── Terminal.svelte
│   │
│   ├── lib/
│   │   ├── components/
│   │   │   ├── industrial/           # Industrial design components
│   │   │   │   ├── IndustrialPanel.svelte
│   │   │   │   ├── IndustrialButton.svelte
│   │   │   │   ├── IndustrialMenuBar.svelte
│   │   │   │   ├── IndustrialTable.svelte
│   │   │   │   ├── IndustrialStatCard.svelte
│   │   │   │   ├── IndustrialLoader.svelte
│   │   │   │   └── IndustrialDivider.svelte
│   │   │   ├── portal/               # OLD: Portal components (deprecated)
│   │   │   ├── Socials.svelte        # Social media links
│   │   │   └── TerminalLine.svelte   # Deprecated
│   │   │
│   │   ├── styles/
│   │   │   ├── industrial.scss       # Industrial design tokens
│   │   │   └── animations.scss       # Animations & transitions
│   │   │
│   │   └── types/
│   │       └── index.ts              # Shared TypeScript types
│   │
│   ├── app.css                       # Global Tailwind + Industrial styles
│   └── app.d.ts                      # TypeScript declarations
│
├── static/
│   └── favicon.png
│
├── tailwind.config.ts
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
├── postcss.config.js
├── package.json
├── AGENTS.md                         # This file
└── README.md
```

---

## API Integrations

### Spotify Integration (`/music`)

- **Auth:** Client credentials flow (stored securely in env)
- **Endpoint:** `/playlists` from Spotify API
- **Data Loading:** Server-side in `+page.server.ts`
- **Functionality:** Fetches user's playlists, paginated display

### Strava Integration (`/healthcheck`)

- **Auth:** OAuth token with refresh mechanism
- **Endpoints:** `/athlete/stats`, `/activities`
- **Data Processing:**
  - Fetches activities from Jan 1 to current date
  - Groups by month
  - Calculates YTD totals, personal records
- **Features:**
  - Unit conversion (miles/km) toggle
  - Pace calculations
  - Time-based activity filtering

### Environment Variables Required

```
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
STRAVA_CLIENT_ID
STRAVA_CLIENT_SECRET
STRAVA_REFRESH_TOKEN
```

---

## Animations & Effects

### Reduced Motion Support

All animations respect `prefers-reduced-motion`:

```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Button Interactions

```scss
// Press effect
.btn-industrial:active {
  transform: translateY(1px);
  border-color: var(--border-dark) var(--border-light) var(--border-light) var(--border-dark);
}
```

### Focus States

All interactive elements have visible focus:

```scss
.focus-industrial:focus-visible {
  outline: 2px solid var(--accent-green);
  outline-offset: 2px;
}
```

---

## Accessibility

### Color Contrast

- Primary text (#c9c9c9) on dark bg (#1a1a1a): 11.5:1 (AAA)
- Accent text (#8b9a5b) on dark bg: 5.2:1 (AA)
- All text meets WCAG AA minimum (4.5:1)

### Keyboard Navigation

- Full keyboard support with Tab navigation
- Visible focus rings on all interactive elements
- Skip links where appropriate

### Screen Readers

- Semantic HTML (nav, main, section, article)
- ARIA labels on icon-only buttons
- Proper heading hierarchy

---

## Development Workflow

### Before Starting

1. Read this AGENTS.md for design system
2. Run `npm run dev` to start development
3. Check component library in `src/lib/components/industrial/`

### During Development

1. Use `npm run dev` for hot reload
2. Run `npm run check:watch` for continuous type checking
3. Test at multiple breakpoints (mobile, tablet, desktop)
4. Verify bevel effects render correctly

### Before Committing

1. Run `npm run check` - No TypeScript errors
2. Run `npm run build` - Production build succeeds
3. Test all pages locally
4. Write descriptive commit message

### Before Production

**!!!! CRITICAL !!!!**

1. **DO NOT** run `git push` without user approval
2. Show user the changes via dev server
3. Get explicit "ok to push" confirmation
4. Only then deploy to production

---

## Common Tasks

### Adding a New Page

1. Create `/src/routes/[route-name]/+page.svelte`
2. Import Industrial components:
   ```typescript
   import IndustrialPanel from "$lib/components/industrial/IndustrialPanel.svelte";
   import IndustrialButton from "$lib/components/industrial/IndustrialButton.svelte";
   ```
3. Use consistent spacing and color tokens
4. Add navigation item to IndustrialMenuBar in layout

### Creating a New Component

1. Create `.svelte` file in `src/lib/components/industrial/`
2. Define prop interface with TypeScript
3. Use `$props()` for type-safe prop destructuring
4. Apply industrial styling (bevels, colors)
5. Document in this AGENTS.md

### Styling a Component

1. Use CSS custom properties for colors
2. Apply `.industrial-raised` or `.industrial-sunken` for bevels
3. Use monospace font for industrial feel
4. Add `:hover` and `:active` states for buttons
5. Include `:focus-visible` for accessibility

---

## Migration Notes

### From Portal to Industrial

**What Changed:**
- White backgrounds -> Dark #1a1a1a backgrounds
- Blue accents -> Olive green #8b9a5b accents
- Flat panels -> 3D beveled panels
- Sans-serif body -> All monospace
- Portal transitions -> Subtle industrial effects

**What's Preserved:**
- All functionality (Spotify, Strava integrations)
- Route structure and navigation
- TypeScript strict mode
- Server-side data loading
- Easter egg route (/layarteb) - keeps retro style

### Deprecated Components

The following are deprecated and should not be used:

```
src/lib/components/portal/     # All Portal components
src/lib/components/RetroButtonLink.svelte
src/lib/components/TerminalBox.svelte
```

Use Industrial components instead.

---

## Useful References

- **Half-Life 1 UI:** Visual reference for industrial aesthetic
- **Counter-Strike 1.6 Menu:** Navigation and panel styling
- **TailwindCSS Docs:** https://tailwindcss.com
- **SvelteKit Docs:** https://kit.svelte.dev
- **Svelte 5 Runes:** https://svelte.dev/docs/svelte
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

## Contact & Support

For questions about the design system or implementation, refer to this AGENTS.md or the inline code comments in components.

---

## REMINDER: DO NOT PUSH TO PRODUCTION WITHOUT USER APPROVAL

Last Updated: January 15, 2026
