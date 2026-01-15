# AGENTS.md - McGeocity Portal UI Portfolio

## Overview
McGeocity is a personal portfolio website featuring a Portal-inspired hybrid UI design. The site showcases projects, music playlists, running activities, and includes interactive elements inspired by Portal test chambers with portal transition effects and modern, clean aesthetics.

**Live Site:** https://mcgeocity.vercel.app

**Design Era:** Portal-inspired hybrid aesthetic (white backgrounds, black monospace, geometric borders, accent colors)

---

## Build & Development Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (Vercel adapter)
- `npm run check` - Run TypeScript/Svelte type checking (strict mode)
- `npm run check:watch` - Continuous type checking during development
- No test framework configured

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
- Import components from `$lib/` alias (e.g., `import PanelBox from "$lib/components/PanelBox.svelte"`)
- Use double quotes for all imports and string literals in TS/JS
- Organize imports: Svelte → external libs → internal modules → types
- Prefer named exports for components

### Indentation & Formatting
- Use **tabs** (not spaces) for indentation throughout
- Component props: destructure with `$props()` on single line
- Maintain semantic HTML with accessibility in mind

### Component Naming
- **Components:** PascalCase (e.g., `PanelBox.svelte`, `ProjectCard.svelte`)
- **Routes:** Use +page.svelte, +layout.svelte, +page.server.ts conventions
- **Types:** PascalCase (e.g., `Project`, `SpotifyPlaylist`)
- **Variables:** camelCase (e.g., `isLoading`, `panelHeight`)

### Styling Approach
- **Tailwind:** Primary styling with utility classes
- **Responsive:** Use Tailwind breakpoints (sm:, md:, lg:) for mobile-first design
- **SCSS:** Use `<style lang="scss">` for complex animations, effects, and non-utility styles
- **No CSS Modules:** Global styles via app.css, scoped styles in components

---

## Design System

### Color Palette

#### Primary Colors
- **White (bg):** `#ffffff` / `bg-white` - Main background for panels
- **Black (text):** `#000000` / `text-black` - Primary text and borders
- **Gray (neutral):** `#f0f0f0`, `#e5e5e5`, `#999999` - Subtle depth and dividers

#### Accent Colors (Portal-Inspired)
- **Portal Blue:** `#4a90e2` / `bg-blue-500` - Interactive elements, hover states
- **Portal Orange:** `#ff8c42` / `bg-orange-500` - Secondary accent, warnings
- **Cyan/Light Blue:** `#00d4ff` / `bg-cyan-400` - Highlights, important data
- **Success Green:** `#22c55e` / `bg-green-500` - Positive feedback, confirmations

#### Semantic States
- **Hover:** Panels and buttons use Portal Blue accent
- **Active:** Increased opacity/saturation of accent colors
- **Disabled:** Gray text with reduced opacity
- **Loading:** Cyan accent with animation

### Typography

#### Font Stack
- **Monospace (code/labels):** `Inconsolata, "Courier New", monospace`
  - Used for: Technical labels, command-like headings, code snippets
- **Sans-serif (body):** System stack `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - Used for: Main body text, descriptions, readable content

#### Font Sizes
- **Extra Large:** 2.25rem (36px) - Main titles
- **Large:** 1.875rem (30px) - Page headers
- **Medium:** 1.125rem (18px) - Section titles
- **Regular:** 1rem (16px) - Body text
- **Small:** 0.875rem (14px) - Secondary text, labels
- **Extra Small:** 0.75rem (12px) - Captions, metadata

#### Line Heights
- **Headings:** 1.2 (tight)
- **Body:** 1.6 (relaxed)
- **Small text:** 1.5 (balanced)

### Border & Spacing

#### Borders
- **Panel borders:** 2px solid black (`border-2 border-black`)
- **Accent borders:** 2px solid with accent color for interactive elements
- **Dividers:** 1px dotted gray (`border-dotted border-gray-400`)
- **Radius:** Minimal (0px) for sharp, geometric aesthetic; occasional `rounded-sm` (2px) for softness

#### Spacing Scale (Tailwind)
- **xs:** 0.25rem (4px) - Micro spacing within components
- **sm:** 0.5rem (8px) - Tight grouping
- **md:** 1rem (16px) - Standard spacing
- **lg:** 1.5rem (24px) - Section spacing
- **xl:** 2rem (32px) - Major section gaps
- **2xl:** 3rem (48px) - Page-level spacing

#### Responsive Design
- **Mobile-first:** Default styles for mobile, enhance with breakpoints
- **sm:** 640px - Tablets
- **md:** 768px - Small desktops
- **lg:** 1024px - Standard desktops
- **xl:** 1280px - Large displays

### Component Library

#### Core Components

**1. PanelBox.svelte**
- Main container for content sections
- Props: `title`, `children`, `variant` (default/interactive)
- Features: 2px black border, white background, drop shadow on interactive
- Used for: All major sections (projects, music, healthcheck, etc.)

**2. PanelContainer.svelte**
- Grid layout wrapper for multiple panels
- Props: `columns` (responsive), `gap`
- Auto-arranges child panels with Portal-style spacing

**3. PanelButton.svelte**
- Interactive button styled as Portal chamber button
- Props: `label`, `onClick`, `variant` (primary/secondary), `disabled`
- Features: Border highlight on hover, Portal Blue accent
- Replaces: Old RetroButtonLink component

**4. PanelNav.svelte**
- Navigation component with Portal-style buttons
- Horizontal or vertical layout
- Used for: Main navigation, section filters

**5. StatCard.svelte**
- Displays key metrics (music, healthcheck data)
- Props: `label`, `value`, `unit`, `accent`
- Features: Monospace values, bordered container

**6. TablePanel.svelte**
- Portal-styled table wrapper
- Props: `headers`, `rows`, `data`
- Features: Black borders between rows, hover highlights
- Used for: Projects table, playlists, activities

**7. LoadingPanel.svelte**
- Portal transition loading state
- Props: `message`, `progress`
- Features: Animated elements with accent colors, typewriter effect

#### Utility Components
- **TerminalLine.svelte** - Horizontal separator (preserved, updated styling)
- **Socials.svelte** - Social media links (updated with Portal styling)
- **PortalTransition.svelte** - Portal-inspired page transitions (new)

### Animations & Effects

#### Portal Transitions
```scss
@keyframes portalEntry {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes portalExit {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.95); }
}

@keyframes panelGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.3); }
  50% { box-shadow: 0 0 8px 2px rgba(74, 144, 226, 0.1); }
}
```

#### Interactive Effects
- **Button Hover:** Color shift to Portal Blue with subtle scale (1.02)
- **Panel Hover:** Slight lift with drop shadow, border accent color
- **Loading:** Rotating elements, pulsing opacity, typewriter text animation
- **Focus States:** 2px Portal Blue focus ring on interactive elements

#### Disabled States
- **Opacity:** 0.5 for disabled elements
- **Cursor:** not-allowed pointer
- **Color:** Gray text instead of black

---

## Directory Structure

```
/home/mckusa/Code/McGeocity/
├── src/
│   ├── routes/                          # SvelteKit page routes
│   │   ├── +page.svelte                # Home page (landing)
│   │   ├── +layout.svelte              # Root layout with Portal styling
│   │   ├── +layout.server.ts           # Layout server logic (breadcrumbs)
│   │   ├── about/
│   │   │   └── +page.svelte            # About/blog section (future redesign)
│   │   ├── projects/
│   │   │   └── +page.svelte            # Projects showcase (Portal table)
│   │   ├── music/
│   │   │   ├── +page.svelte            # Spotify playlists (Portal panels)
│   │   │   └── +page.server.ts         # Spotify API integration
│   │   ├── healthcheck/
│   │   │   ├── +page.svelte            # Strava stats (Portal panels)
│   │   │   └── +page.server.ts         # Strava API integration
│   │   ├── layarteb/                   # Easter egg route
│   │   │   ├── +page.svelte            # Easter egg page
│   │   │   ├── +page.server.ts         # Form validation
│   │   │   └── Terminal.svelte         # Interactive terminal simulator
│   │   └── Scrollbar.svelte            # (Unused, deprecated)
│   │
│   ├── lib/
│   │   ├── components/
│   │   │   ├── portal/                 # NEW: Portal design system components
│   │   │   │   ├── PanelBox.svelte     # Main panel container
│   │   │   │   ├── PanelContainer.svelte
│   │   │   │   ├── PanelButton.svelte  # Interactive button
│   │   │   │   ├── PanelNav.svelte     # Navigation
│   │   │   │   ├── StatCard.svelte     # Metric display
│   │   │   │   ├── TablePanel.svelte   # Table wrapper
│   │   │   │   ├── LoadingPanel.svelte # Loading state
│   │   │   │   └── PortalTransition.svelte
│   │   │   │
│   │   │   ├── RetroButtonLink.svelte  # (Deprecated, replaced by PanelButton)
│   │   │   ├── TerminalLine.svelte     # Updated for Portal style
│   │   │   ├── TerminalBox.svelte      # (Deprecated, replaced by PanelBox)
│   │   │   └── Socials.svelte          # Updated styling
│   │   │
│   │   ├── assets/
│   │   │   ├── retro_*.png             # (Old assets, being phased out)
│   │   │   └── portal/                 # NEW: Portal-themed assets (if needed)
│   │   │
│   │   ├── styles/                     # NEW: Shared styles
│   │   │   ├── portal.scss             # Portal design tokens and utilities
│   │   │   ├── animations.scss         # Transition and effect animations
│   │   │   └── theme.scss              # Color and spacing utilities
│   │   │
│   │   ├── types/                      # NEW: Shared TypeScript types
│   │   │   ├── index.ts
│   │   │   └── components.ts           # Component prop types
│   │   │
│   │   └── index.ts                    # Library exports
│   │
│   ├── app.css                          # Global Tailwind imports + Portal CSS
│   └── app.d.ts                         # TypeScript declarations
│
├── static/
│   └── favicon.png                      # (Update with Portal aesthetic)
│
├── tailwind.config.ts                   # Extended with Portal theme
├── svelte.config.js                     # SvelteKit configuration
├── tsconfig.json                        # TypeScript config (strict mode)
├── vite.config.ts                       # Vite configuration
├── postcss.config.js                    # PostCSS setup
├── package.json                         # Dependencies
├── AGENTS.md                            # This file
└── README.md
```

---

## API Integrations

### Spotify Integration (`/music`)
- **Auth:** Client credentials flow (stored securely in env)
- **Endpoint:** `/playlists` from Spotify API
- **Data Loading:** Server-side in `+page.server.ts`
- **Functionality:** Fetches user's playlists, paginated display
- **Portal UI Adaptation:** Playlist table with Portal-styled cells and hover effects

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
- **Portal UI Adaptation:** Stat cards with accent colors, interactive tables

### Environment Variables Required
```
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
STRAVA_CLIENT_ID
STRAVA_CLIENT_SECRET
STRAVA_REFRESH_TOKEN
```

---

## Key Implementation Details

### Layout Architecture
- **Root Layout (+layout.svelte):** Portal-themed wrapper with navigation
- **Breadcrumb Navigation:** Dynamic based on current route
- **Content Container:** Centered max-width with Portal panel styling
- **Responsive Behavior:** Mobile-first with graceful breakpoints

### Component Communication
- **Props:** Primary method for passing data
- **Events:** Used for user interactions (clicks, form submissions)
- **Context API:** Consider for theme/dark mode (future enhancement)
- **Stores:** Could be added for global state if needed (currently minimal state)

### Data Flow
- **Server-side loading:** Spotify/Strava data fetched in +page.server.ts
- **Props to components:** Data passed down through component hierarchy
- **Reactive updates:** $state() for client-side mutations
- **Derived values:** $derived() for computed properties

### Accessibility
- Semantic HTML (button, nav, section, article elements)
- ARIA labels for interactive components
- Keyboard navigation support (focus rings with Portal Blue accent)
- Color contrast: Black on white ≥ 21:1 ratio (WCAG AAA)
- Focus visible outlines on all interactive elements

---

## Performance Considerations

### Code Splitting
- SvelteKit automatically code-splits at route boundaries
- Dynamic imports for heavy components if needed
- API data fetched server-side to avoid client-side waterfall

### Image Optimization
- PNG assets kept small
- Consider SVG for UI elements (Portal lines, buttons)
- Lazy loading for non-critical images

### Animations
- Use CSS transitions/animations (GPU-accelerated)
- Avoid heavy JS animations during interactions
- Prefers-reduced-motion support for accessibility

### Bundle Size
- TailwindCSS purges unused styles in production
- Keep component size small and focused
- Evaluate third-party dependencies before adding

---

## Deployment

### Vercel Configuration
- **Adapter:** @sveltejs/adapter-vercel
- **Build Command:** `npm run build`
- **Environment:** Production builds use Vercel optimization
- **Env Variables:** Set in Vercel dashboard (Spotify/Strava credentials)

### Pre-deployment Checklist
1. Run `npm run check` - Ensure no TypeScript errors
2. Run `npm run build` - Verify production build succeeds
3. Test locally with `npm run dev`
4. Check all integrations (music, healthcheck)
5. Verify Portal transitions work smoothly
6. Test responsive design on mobile/tablet

---

## Svelte 5 Runes Usage

### Component Props
```typescript
const { title, data, variant = "default" }: {
  title: string;
  data: DataType;
  variant?: "default" | "interactive";
} = $props();
```

### Reactive State
```typescript
let isLoading = $state(true);
let selectedFilter = $state("all");
```

### Derived Values
```typescript
let filteredProjects = $derived(projects.filter(p => p.category === selectedFilter));
```

### Effects & Lifecycle
```typescript
$effect(() => {
  // Side effect
  console.log("Component mounted/updated");
  
  return () => {
    // Cleanup on component destroy or effect re-run
  };
});
```

---

## Migration Notes (Retro → Portal)

### What's Changing
1. **Color Scheme:** Green-on-black → White with black text and accent colors
2. **Borders:** Dashed green → Solid black (2px), accent on interactive
3. **Typography:** Maintained monospace for labels, added sans-serif for body
4. **Components:** Image-based buttons → Interactive Portal buttons
5. **Animations:** Scanlines and glow effects → Portal transitions and hover effects
6. **Layout:** Full-width terminals → Centered panel grid

### What's Preserved
- All functionality (Spotify, Strava integrations)
- Route structure and navigation
- TypeScript strict mode
- SvelteKit framework
- Server-side data loading
- Easter egg route (/layarteb)

### Deprecations
- `RetroButtonLink.svelte` - Use `PanelButton.svelte`
- `TerminalBox.svelte` - Use `PanelBox.svelte`
- Old retro PNG button assets - Use Portal-styled components
- Scanline SCSS effects - Replaced with Portal transitions

---

## Development Workflow

### Before Starting a Feature
1. Review design system in this AGENTS.md
2. Create component sketch if new
3. Check TypeScript types in `lib/types/`
4. Use Tailwind for styling, SCSS for animations

### During Development
1. Use `npm run dev` for hot reload
2. Run `npm run check:watch` in parallel for type safety
3. Test responsive design at breakpoints
4. Verify Portal transitions work smoothly

### Before Committing
1. Run `npm run check` - No TypeScript errors
2. Run `npm run build` - Production build succeeds
3. Test in target browsers
4. Update AGENTS.md if adding new patterns

### Common Tasks

**Adding a new page:**
1. Create `/src/routes/[route-name]/+page.svelte`
2. Import Portal components (PanelBox, PanelNav, etc.)
3. Use consistent spacing and color tokens
4. Add navigation link to PanelNav in root layout

**Adding a data-driven component:**
1. Create `.svelte` file in `lib/components/portal/`
2. Define prop interface in `lib/types/components.ts`
3. Use `$props()` for type-safe prop destructuring
4. Use `$state()` and `$derived()` for reactivity

**Styling a component:**
1. Prefer Tailwind utility classes for layout/spacing
2. Use SCSS for complex effects or animations
3. Reference Portal color tokens via Tailwind classes
4. Maintain black borders and white backgrounds for consistency

---

## Future Enhancements

- Dark mode toggle (Portal dark aesthetic)
- Animation preferences (reduced-motion support)
- Component storybook for design system
- E2E testing (Playwright/Cypress)
- Performance monitoring
- Analytics integration
- More Portal-themed assets (SVG backgrounds, transitions)
- About page redesign (Phase 2)

---

## Useful References

- **Portal Game:** Official aesthetic and UI inspiration
- **TailwindCSS Docs:** https://tailwindcss.com
- **SvelteKit Docs:** https://kit.svelte.dev
- **Svelte 5 Runes:** https://svelte.dev/docs/svelte
- **Web Accessibility (WCAG):** https://www.w3.org/WAI/WCAG21/quickref/

---

## Contact & Support

For questions about the design system or implementation, refer to this AGENTS.md or the inline code comments in components.

Last Updated: January 15, 2026
