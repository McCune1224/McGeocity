<script lang="ts">
  import TerminalLine from "./TerminalLine.svelte";
  const fart = "https://bsky.app/profile/mckusa.bsky.social";
</script>

<section class="py-4">
  <TerminalLine />
  <p class="text-start text-3xl">$> socials</p>
  <ul class="flex flex-row justify-center py-4">
    <li>
      <a class="hover:text-red-500" href={fart} target="_blank"
        >{"[ @Bluesky ]"}</a
      >
    </li>
    <li>
      <a
        class="hover:text-red-500"
        href="https://github.com/mccune1224"
        target="_blank">{"[ @Github ]"}</a
      >
    </li>
    <li>
      <a
        class="hover:text-red-500"
        href="https://mccune1224.substack.com/"
        target="_blank">{" [ @Substack ]"}</a
      >
    </li>
  </ul>
</section>
