<script lang="ts">
	import { themeStore } from "$lib/stores/themeStore.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";

	interface NavItem {
		label: string;
		id: string;
	}

	const sections: NavItem[] = [
		{ label: "Experience", id: "experience" },
		{ label: "Education", id: "education" },
		{ label: "Skills", id: "skills" },
		{ label: "Certs", id: "certifications" },
		{ label: "Projects", id: "projects" },
		{ label: "Contact", id: "contact" },
	];

	const socialLinks = [
		{
			label: "GitHub",
			href: "https://github.com/mccune1224",
			icon: "github",
		},
		{
			label: "LinkedIn",
			href: "https://linkedin.com/in/alexander-mccune",
			icon: "linkedin",
		},
		{
			label: "Substack",
			href: "https://mccune1224.substack.com/",
			icon: "substack",
		},
	];

	let activeSection = $state("hero");
	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	$effect(() => {
		function handleScroll() {
			isScrolled = window.scrollY > 10;

			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						activeSection = section.id;
						break;
					}
				}
			}
			if (window.scrollY < 100) activeSection = "hero";
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	});

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
			window.history.replaceState(null, "", `/#${id}`);
		}
		isMenuOpen = false;
	}

	function scrollToHero() {
		window.scrollTo({ top: 0, behavior: "smooth" });
		window.history.replaceState(null, "", "/");
		isMenuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300"
	class:scrolled={isScrolled}
>
	<div class="max-w-content mx-auto flex items-center justify-between h-14 sm:h-16">
		<!-- Nav Links (desktop) -->
		<div class="hidden sm:flex items-center gap-0.5">
			{#each sections as section}
				<button
					onclick={() => scrollTo(section.id)}
					class="relative px-2.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md
						text-text-secondary hover:text-text-primary
						hover:bg-bg-tertiary"
				>
					{section.label}
					{#if activeSection === section.id}
						<span class="absolute bottom-1.5 left-2.5 right-2.5 h-0.5 rounded-full bg-accent-primary"></span>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Right: Actions -->
		<div class="flex items-center gap-0.5 ml-2 flex-shrink-0">
			<!-- Social bio links (desktop) -->
			<div class="hidden sm:flex items-center gap-0.5 mr-1">
				{#each socialLinks as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.label}
						class="p-2 rounded-md text-text-tertiary hover:text-accent-primary hover:bg-bg-tertiary transition-colors"
					>
						{#if link.icon === "github"}
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						{:else if link.icon === "linkedin"}
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						{:else if link.icon === "substack"}
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
								<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
							</svg>
						{/if}
					</a>
				{/each}
			</div>

			<!-- Divider -->
			<div class="hidden sm:block w-px h-5 bg-border-primary"></div>

			<!-- Email -->
			<a
				href="mailto:alexmccune1224@gmail.com"
				aria-label="Email"
				class="p-2 rounded-md text-text-tertiary hover:text-accent-primary hover:bg-bg-tertiary transition-colors"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect width="20" height="16" x="2" y="4" rx="2" />
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
			</a>

			<!-- Resume download -->
			<a
				href="/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Download Resume"
				class="p-2 rounded-md text-text-tertiary hover:text-accent-primary hover:bg-bg-tertiary transition-colors"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
			</a>

			<ThemeToggle />

			<!-- Mobile hamburger -->
			<button
				onclick={() => isMenuOpen = !isMenuOpen}
				class="sm:hidden p-2 rounded-md text-text-tertiary hover:text-text-primary hover:bg-bg-tertiary transition-colors"
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				aria-expanded={isMenuOpen}
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					{#if isMenuOpen}
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					{:else}
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="18" x2="21" y2="18" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="sm:hidden border-t border-border-primary bg-bg-primary/95 backdrop-blur-md shadow-lg">
			<div class="max-w-content mx-auto py-3 px-4 flex flex-col gap-1">
				{#each sections as section}
					<button
						onclick={() => scrollTo(section.id)}
						class="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors
							text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
					>
						{section.label}
					</button>
				{/each}
				<hr class="my-1 border-border-primary" />
				<div class="flex items-center gap-2 px-3 py-2">
					<a href="mailto:alexmccune1224@gmail.com" aria-label="Email" class="p-2 rounded-md text-text-tertiary hover:text-accent-primary hover:bg-bg-tertiary transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
					</a>
					{#each socialLinks as link}
						<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} class="p-2 rounded-md text-text-tertiary hover:text-accent-primary hover:bg-bg-tertiary transition-colors">
							{#if link.icon === "github"}
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
							{:else if link.icon === "linkedin"}
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
							{:else if link.icon === "substack"}
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
							{/if}
						</a>
					{/each}
				</div>
				<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
					</svg>
					Download Resume
				</a>
			</div>
		</div>
	{/if}
</nav>

<!-- Skip to content -->
<a href="#hero" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-white focus:rounded">
	Skip to content
</a>

<style lang="scss">
	nav {
		background: transparent;

		&.scrolled {
			background: rgb(var(--color-bg-primary) / 0.88);
			backdrop-filter: blur(14px);
			-webkit-backdrop-filter: blur(14px);
			border-bottom: 1px solid rgb(var(--color-border-primary));
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
		}
	}

	:global([data-theme="dark"]) .scrolled {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	}
</style>
