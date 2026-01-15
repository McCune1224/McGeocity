<script lang="ts">
	interface Props {
		message?: string;
		progress?: number;
	}

	const { message = "Loading...", progress }: Props = $props();

	let displayText = $state("");
	let currentIndex = $state(0);

	// Typewriter effect
	$effect(() => {
		if (currentIndex < message.length) {
			const timer = setTimeout(() => {
				displayText = message.slice(0, currentIndex + 1);
				currentIndex += 1;
			}, 50);

			return () => clearTimeout(timer);
		}
	});
</script>

<div class="border-2 border-blue-500 bg-white p-8 text-center">
	<div class="mb-6">
		<!-- Loading spinner with dots -->
		<div class="flex items-center justify-center gap-2">
			<div
				class="inline-block h-3 w-3 animate-bounce bg-blue-500 rounded-full"
				style="animation-delay: 0s"
			></div>
			<div
				class="inline-block h-3 w-3 animate-bounce bg-orange-500 rounded-full"
				style="animation-delay: 0.1s"
			></div>
			<div
				class="inline-block h-3 w-3 animate-bounce bg-cyan-400 rounded-full"
				style="animation-delay: 0.2s"
			></div>
		</div>
	</div>

	<!-- Typewriter text -->
	<p class="font-mono text-lg text-black">
		{displayText}<span class="animate-pulse">_</span>
	</p>

	<!-- Progress bar -->
	{#if progress !== undefined}
		<div class="mt-6 bg-gray-200 border border-black">
			<div
				class="bg-blue-500 h-2 transition-all"
				style="width: {progress}%"
			></div>
		</div>
		<p class="mt-2 font-mono text-sm text-gray-600">{Math.round(progress)}%</p>
	{/if}
</div>

<style lang="scss">
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	.animate-bounce {
		animation: bounce 1.4s infinite;
	}
</style>
