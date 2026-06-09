<script lang="ts">
	import SectionHeading from "./SectionHeading.svelte";

	interface SkillCategory {
		name: string;
		skills: string[];
	}

	const categories: SkillCategory[] = [
		{
			name: "Systems & Infrastructure",
			skills: ["Windows Server", "Active Directory", "Azure AD", "LDAP", "VMware", "O365", "ServiceNow", "ITIL"],
		},
		{
			name: "Scripting & Automation",
			skills: ["PowerShell", "Python", "Bash", "Go", "PostgreSQL", "SQL", "REST APIs", "Git"],
		},
		{
			name: "Networking & Cloud",
			skills: ["TCP/IP", "DNS", "DHCP", "VLANs", "Firewalls", "AWS (Lambda, EC2, S3)", "Docker"],
		},
		{
			name: "Security & Compliance",
			skills: ["Vulnerability Mgmt", "IAM / RBAC / PAM", "Risk Assessment", "SIEM", "Incident Response", "Disaster Recovery", "NIST CSF"],
		},
	];
</script>

<section id="skills" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-content mx-auto">
		<SectionHeading
			title="Skills & Technologies"
			subtitle=""
		/>

		<div class="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
			{#each categories as category}
				<div class="p-4 sm:p-6 rounded-lg border border-border-primary bg-bg-secondary hover:border-accent-primary transition-colors duration-200">
					<h3 class="text-sm sm:text-base font-semibold text-text-primary mb-3 sm:mb-4">
						{category.name}
					</h3>
					<div class="flex flex-wrap gap-1.5 sm:gap-2">
						{#each category.skills as skill}
							<span class="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-bg-tertiary text-text-secondary border border-border-primary whitespace-nowrap hover:scale-105 transition-transform duration-200">
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
