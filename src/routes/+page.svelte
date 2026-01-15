<script lang="ts">
	import PanelBox from "$lib/components/portal/PanelBox.svelte";
	import PanelButton from "$lib/components/portal/PanelButton.svelte";
	import PanelContainer from "$lib/components/portal/PanelContainer.svelte";
	import PortalTransition from "$lib/components/portal/PortalTransition.svelte";
	import Socials from "$lib/components/Socials.svelte";
</script>

<PortalTransition>
	<div class="space-y-8">
		<!-- Hero Section -->
		<PanelBox title="WELCOME" variant="interactive">
			<div class="space-y-4">
				<h1 class="text-4xl font-mono font-bold text-black">
					McGeocity Portal
				</h1>
				<p class="text-gray-700 leading-relaxed">
					Welcome to my personal portfolio and test chamber of projects! I'm <span class="font-bold">Alex McCune</span>, 
					currently based in <span class="font-bold">Rochester, NY</span> working as an 
					application/system administrator. When not administering systems, I enjoy 
					programming, board games, video games, rock climbing, and running.
				</p>
				<p class="text-sm text-gray-600 italic">
					(Pro tip: The winters here are great for indoor gaming...)
				</p>
			</div>
		</PanelBox>

		<!-- Navigation Section -->
		<div>
			<h2 class="text-sm font-mono font-bold text-gray-600 mb-4 uppercase tracking-wider">
				Portal Chambers
			</h2>
			<PanelContainer columns={2} gap="md">
				<PanelButton label="[WHO AM I]" href="/about" variant="primary" />
				<PanelButton label="[ WORKS ]" href="/projects" variant="primary" />
				<PanelButton label="[ MUSIC ]" href="/music" variant="primary" />
				<PanelButton label="[ HEALTH ]" href="/healthcheck" variant="primary" />
			</PanelContainer>
		</div>

		<!-- About Section Preview -->
		<PanelBox variant="default">
			<div class="space-y-3">
				<h3 class="font-mono font-bold text-lg text-black">Quick Facts</h3>
				<ul class="font-mono text-sm space-y-2 text-gray-700">
					<li class="flex items-start gap-2">
						<span class="text-blue-500 font-bold">→</span>
						<span>Full Stack System & Application Administrator</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-blue-500 font-bold">→</span>
						<span>Passionate about automation and open source</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-blue-500 font-bold">→</span>
						<span>Avid rock climber and runner tracking activities via Strava</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="text-blue-500 font-bold">→</span>
						<span>Board game enthusiast with eclectic music taste</span>
					</li>
				</ul>
			</div>
		</PanelBox>

		<!-- Socials -->
		<div class="flex justify-center pt-4">
			<Socials />
		</div>
	</div>
</PortalTransition>

<style lang="scss">
	:global(body) {
		background-color: #ffffff;
	}
</style>
