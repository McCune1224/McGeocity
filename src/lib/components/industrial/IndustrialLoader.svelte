<script lang="ts">
	interface Props {
		message?: string;
	}

	const { message = "Loading..." }: Props = $props();
</script>

<div class="industrial-loader">
	<div class="loader-container">
		<div class="loader-text">{message}</div>
		<div class="loader-bar">
			<div class="loader-progress"></div>
		</div>
	</div>
</div>

<style lang="scss">
	.industrial-loader {
		padding: 2rem;
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
		font-family: var(--font-mono, "Courier New", monospace);
	}

	.loader-container {
		max-width: 300px;
		margin: 0 auto;
		text-align: center;
	}

	.loader-text {
		font-size: 0.875rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #8b9a5b;
		margin-bottom: 1rem;
	}

	.loader-bar {
		height: 20px;
		border: 2px solid;
		border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
		background: #252525;
		padding: 3px;
	}

	.loader-progress {
		height: 100%;
		background: linear-gradient(
			90deg,
			#8b9a5b 0%,
			#a5b56f 50%,
			#8b9a5b 100%
		);
		animation: loading 1.5s ease-in-out infinite;
	}

	@keyframes loading {
		0% {
			width: 0%;
		}
		50% {
			width: 100%;
		}
		100% {
			width: 0%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.loader-progress {
			animation: none;
			width: 50%;
		}
	}
</style>
