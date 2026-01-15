<script lang="ts">
	interface Props {
		variant?: "horizontal" | "vertical";
	}

	const { variant = "horizontal" }: Props = $props();
</script>

<div class="industrial-divider {variant}"></div>

<style lang="scss">
	.industrial-divider {
		&.horizontal {
			width: 100%;
			height: 4px;
			background: linear-gradient(
				180deg,
				#1a1a1a 0%,
				#1a1a1a 25%,
				#4a4a4a 25%,
				#4a4a4a 50%,
				#1a1a1a 50%,
				#1a1a1a 75%,
				#2d2d2d 75%,
				#2d2d2d 100%
			);
			margin: 1rem 0;
		}

		&.vertical {
			width: 4px;
			height: 100%;
			background: linear-gradient(
				90deg,
				#1a1a1a 0%,
				#1a1a1a 25%,
				#4a4a4a 25%,
				#4a4a4a 50%,
				#1a1a1a 50%,
				#1a1a1a 75%,
				#2d2d2d 75%,
				#2d2d2d 100%
			);
			margin: 0 1rem;
		}
	}
</style>
