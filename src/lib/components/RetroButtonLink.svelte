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
</script>

<button>
  <a class="hover:text-red-500" href={url}>
    <h2 class="gap-2 text-center">{title}</h2>
    <!-- svelte-ignore a11y_mouse_events_have_key_events -->
    <img
      class="h-20 sm:h-auto items-center justify-center text-center"
      {src}
      onmouseover={(e) => (e.target.src = hoverSrc)}
      onmouseout={(e) => (e.target.src = src)}
      onkeypress={(e) => (e.target.src = hoverSrc)}
      {alt}
    /></a
  >
</button>
