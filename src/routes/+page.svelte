<script lang="ts">
	import HeroSection from "$lib/components/HeroSection.svelte";
	import ExperienceSection from "$lib/components/ExperienceSection.svelte";
	import EducationSection from "$lib/components/EducationSection.svelte";
	import SkillsSection from "$lib/components/SkillsSection.svelte";
	import CertificationsSection from "$lib/components/CertificationsSection.svelte";
	import ProjectsSection from "$lib/components/ProjectsSection.svelte";
	import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<svelte:head>
	<title>Alex McCune | IT Systems Administrator</title>
	<meta name="description" content="Alex McCune — IT Systems Administrator with 3+ years of experience managing enterprise infrastructure, automating IT operations, and securing systems. Based in Rochester, NY." />
	<meta name="keywords" content="Alex McCune, IT Systems Administrator, Infrastructure, Server Administration, Automation, Rochester NY" />
	<meta name="author" content="Alex McCune" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://alexmccune.dev/" />

	<meta property="og:title" content="Alex McCune | IT Systems Administrator" />
	<meta property="og:description" content="IT Systems Administrator | 3+ years managing enterprise infrastructure, automation, and IT operations at scale." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alexmccune.dev/" />
	<meta property="og:site_name" content="Alex McCune" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Alex McCune | IT Systems Administrator" />
	<meta name="twitter:description" content="IT Systems Administrator | 3+ years managing enterprise infrastructure, automation, and IT operations at scale." />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Alex McCune",
		"jobTitle": "IT Systems Administrator",
		"url": "https://alexmccune.dev",
		"sameAs": [
			"https://linkedin.com/in/alexander-mccune",
			"https://github.com/mccune1224"
		],
		"knowsAbout": ["IT Systems Administration", "Infrastructure Management", "Server Administration", "Enterprise Automation", "Identity & Access Management", "Disaster Recovery"],
		"alumniOf": { "@type": "CollegeOrUniversity", "name": "Concordia University Irvine" },
		"address": { "@type": "PostalAddress", "addressLocality": "Rochester", "addressRegion": "NY" }
	})}</script>`}
</svelte:head>

<HeroSection />
<ExperienceSection />
<EducationSection />
<SkillsSection />
<CertificationsSection />
<ProjectsSection />
<ContactSection />
