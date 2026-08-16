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
	<meta name="description" content="Alex McCune — IT Systems Administrator with 3+ years of experience managing enterprise infrastructure, automating IT operations, and securing systems. CompTIA Security+ certified. Based in Rochester, NY." />
	<meta name="keywords" content="Alex McCune, IT Systems Administrator, Cybersecurity, CompTIA Security+, Infrastructure, Server Administration, Automation, Identity and Access Management, Rochester NY" />
	<meta name="author" content="Alex McCune" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.alexmccune.com/" />

	<meta property="og:title" content="Alex McCune | IT Systems Administrator" />
	<meta property="og:description" content="IT Systems Administrator | 3+ years managing enterprise infrastructure, automation, identity & access management, and security at scale." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.alexmccune.com/" />
	<meta property="og:site_name" content="Alex McCune" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="https://www.alexmccune.com/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Alex McCune — IT Systems Administrator" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Alex McCune | IT Systems Administrator" />
	<meta name="twitter:description" content="IT Systems Administrator | 3+ years managing enterprise infrastructure, automation, identity & access management, and security at scale." />
	<meta name="twitter:image" content="https://www.alexmccune.com/og.png" />
	<meta name="twitter:url" content="https://www.alexmccune.com/" />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Alex McCune",
		"jobTitle": "IT Systems Administrator",
		"url": "https://www.alexmccune.com",
		"image": "https://www.alexmccune.com/avatar.webp",
		"sameAs": [
			"https://linkedin.com/in/alexander-mccune",
			"https://github.com/mccune1224",
			"https://bsky.app/profile/mckusa.bsky.social",
			"https://mccune1224.substack.com/"
		],
		"description": "IT Systems Administrator managing enterprise infrastructure, security patching, and identity & access management for 9 hospitals and 100+ outpatient facilities.",
		"worksFor": { "@type": "Organization", "name": "University of Rochester Medical Center" },
		"knowsAbout": ["IT Systems Administration", "Cybersecurity", "Network Security", "Infrastructure Management", "Server Administration", "Enterprise Automation", "Identity & Access Management", "Vulnerability Management", "Disaster Recovery"],
		"alumniOf": { "@type": "CollegeOrUniversity", "name": "Concordia University Irvine" },
		"address": { "@type": "PostalAddress", "addressLocality": "Rochester", "addressRegion": "NY" },
		"hasCredential": [
			{ "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "CompTIA Security+" },
			{ "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "ITIL v4 Foundation", "recognizedBy": { "@type": "Organization", "name": "AXELOS" } }
		]
	})}</script>`}
</svelte:head>

<HeroSection />
<ExperienceSection />
<EducationSection />
<SkillsSection />
<CertificationsSection />
<ProjectsSection />
<ContactSection />
