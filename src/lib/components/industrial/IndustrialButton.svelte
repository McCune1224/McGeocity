<script lang="ts">
	interface Props {
		label: string;
		onClick?: () => void;
		href?: string;
		variant?: "default" | "active";
		disabled?: boolean;
		type?: "button" | "submit" | "reset";
	}

	const {
		label,
		onClick,
		href,
		variant = "default",
		disabled = false,
		type = "button"
	}: Props = $props();

	const isActive = variant === "active";
</script>

{#if href}
	<a
		{href}
		class="industrial-btn {isActive ? 'active' : ''} {disabled ? 'disabled' : ''}"
		aria-disabled={disabled}
	>
		{label}
	</a>
{:else}
	<button
		{type}
		{disabled}
		onclick={onClick}
		class="industrial-btn {isActive ? 'active' : ''}"
	>
		{label}
	</button>
{/if}

<style lang="scss">
	.industrial-btn {
		display: block;
		width: 100%;
		padding: 0.75rem 1.5rem;
		font-family: var(--font-mono, "Courier New", monospace);
		font-weight: bold;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-align: center;
		text-decoration: none;
		color: #c9c9c9;
		cursor: pointer;
		transition: all 0.1s ease;

		// Raised state (default)
		border: 2px solid;
		border-color: #4a4a4a #1a1a1a #1a1a1a #4a4a4a;
		background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);

		&:hover:not(.disabled) {
			border-color: #5a5a5a #2a2a2a #2a2a2a #5a5a5a;
			background: linear-gradient(180deg, #454545 0%, #3a3a3a 100%);
			color: #8b9a5b;
		}

		&:active:not(.disabled) {
			// Sunken state
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
			transform: translateY(1px);
		}

		&:focus-visible {
			outline: 2px solid #8b9a5b;
			outline-offset: 2px;
		}

		&.active {
			// Sunken state for active
			border-color: #1a1a1a #4a4a4a #4a4a4a #1a1a1a;
			background: #252525;
			color: #8b9a5b;
		}

		&.disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.industrial-btn {
			transition: none;
		}
	}
</style>
