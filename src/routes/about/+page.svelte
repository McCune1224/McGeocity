<script lang="ts">
	import Socials from "$lib/components/Socials.svelte";
	import TerminalLine from "$lib/components/TerminalLine.svelte";
	import { linear } from "svelte/easing";

	const portalAscii = [
		"             .,-:;//;:=,",
		"         . :H@@@MM@M#H/.,+%;,",
		"      ,/X+ +M@@M@MM%=,-%HMMM@X/,",
		"     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-",
		"    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.",
		"  ,%MM@@MH ,@%=            .---=-=:=,.",
		"  -@#@@@MX .,              -%HX$$%%%+;",
		" =-./@M@M$                  .;@MMMM@MM:",
		" X@/ -$MM/                    .+MM@@@M$",
		",@M@H: :@:                    . -X#@@@@-",
		",@@@MMX, .                    /H- ;@M@M=",
		".H@@@@M@+,                    %MM+..%#$.",
		" /MMMM@MMH/.                  XM@MH; -;",
		"  /%+%$XHH@$=              , .H@@@@MX,",
		"   .=--------.           -%H.,@@@@@MX,",
		"   .%MM@@@HHHXX$$$%+- .:$MMX -M@@MM%.",
		"     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=",
		"       =%@M@M#@$-.=$@MM@@@M; %M%=",
		"         ,:+$+-,/H#MMMMMMM@- -,",
		"               =++%%%%+/:-.",
	];
</script>

<div class="">
	<TerminalLine />
	<p class="text-3xl">$> whoami</p>
	<div class="flex flex-row rounded-xl border-green-500 items-center">
		<pre class="gap-0 text-smol">
			{#each portalAscii as line}
				{line}
			{/each}
		</pre>

		<div class=" p-10 flex flex-col gap-4 text-xl">
			<p class="ani-hide">
				I'm Alex McCune, nice to meet you! I live in <b>Rochester NY</b> currently
				work as an application/system admin full time, but still love to program
				in my free time. My go to languages when working on projects include Go,
				C#, and Python. along with prior hands-on experience in managing servers,
				I consistently deliver effective solutions.
			</p>
			<p class="ani-hide">
				When I'm not working you can normally find me playing games, rock
				climbing or running :) (except in the winter where it is cold and
				miserable.)
			</p>
			<p>
				Always happy to connect with others, so feel free to hit me up on my
				socials below :)
			</p>
		</div>
	</div>
</div>
<Socials />
