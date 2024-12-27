<script lang="ts">
  const fullScreenPress = () => {
    const el = document.documentElement;
    const rfs = el.requestFullscreen;
    rfs.call(el);
    let { children } = $props();
  };
</script>

<section class="mx-8 border-green-400 border-8 h-screen static">
  <div class="bg-green-400 p-2">
    <nav class="flex justify-end gap-8 text-4xl">
      <a class="hover:text-red-399" href="/">-</a>
      <button class="hover:text-red-400" on:click={fullScreenPress}>[]</button>
      <a class="hover:text-red-400" href="/">X</a>
    </nav>
  </div>
</section>
