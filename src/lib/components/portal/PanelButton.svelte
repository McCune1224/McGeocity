<script lang="ts">
	interface Props {
		label: string;
		onClick?: () => void;
		variant?: "primary" | "secondary";
		disabled?: boolean;
		href?: string;
		type?: "button" | "submit" | "reset";
	}

	const {
		label,
		onClick,
		variant = "primary",
		disabled = false,
		href,
		type = "button"
	}: Props = $props();

	const isPrimary = variant === "primary";
	const baseClass = "px-6 py-3 font-mono font-bold border-2 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
	const primaryClass = isPrimary
		? "border-black bg-white text-black hover:bg-blue-500 hover:text-white hover:border-blue-500"
		: "border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-black hover:border-black";
</script>

{#if href}
	<a
		{href}
		class="{baseClass} {primaryClass} {disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} inline-block"
		aria-disabled={disabled}
	>
		{label}
	</a>
{:else}
	<button
		{type}
		{disabled}
		onclick={onClick}
		class="{baseClass} {primaryClass} {disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}"
	>
		{label}
	</button>
{/if}

<style lang="scss">
	button,
	a {
		&:active {
			transform: translateY(1px);
		}
	}
</style>
