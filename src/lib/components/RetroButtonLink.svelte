<script lang="ts">
	const {
		title = "",
		url,
		src,
		hoverSrc,
		alt,
	}: {
		title: string;
		url: string;
		src: string;
		hoverSrc: string;
		alt: string;
	} = $props();

	function handleMouseOver(event: MouseEvent) {
		const target = event.target as HTMLImageElement;
		if (target) target.src = hoverSrc;
	}

	function handleMouseOut(event: MouseEvent) {
		const target = event.target as HTMLImageElement;
		if (target) target.src = src;
	}

	function handleKeyPress(event: KeyboardEvent) {
		const target = event.target as HTMLImageElement;
		if (target) target.src = hoverSrc;
	}
</script>

<button>
	<a class="hover:text-red-500" href={url}>
		<h2 class="gap-2 text-center">{title}</h2>
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<img
			class="h-20 sm:h-auto items-center justify-center text-center"
			{src}
			onmouseover={handleMouseOver}
			onmouseout={handleMouseOut}
			onkeypress={handleKeyPress}
			{alt}
		/>
	</a>
</button>
