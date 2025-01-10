<script lang="ts">
	const { access_granted }: { access_granted: boolean } = $props();
	type TerminalLine = {
		type: "input" | "output";
		content: string;
	};

	let history: TerminalLine[] = $state([]);
	let input: string = $state("");

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (input.trim()) {
			history = [...history, { type: "input", content: input }];
			const output = processCommand(input);
			history = [...history, { type: "output", content: output }];
			input = "";
		}
	}
	function processCommand(command: string): string {
		const lowerCommand = command.toLowerCase().trim();
		switch (lowerCommand) {
			case "help":
				return "Available commands: help, clear, echo [text], date";
			case "clear":
				history = [];
				return "";
			case "date":
				return new Date().toLocaleString();
			default:
				if (lowerCommand.startsWith("echo ")) {
					return lowerCommand.slice(5);
				}
				return `Command not found: ${command}`;
		}
	}
</script>

{#if access_granted}
	<div
		class="w-full max-w-2xl mx-auto mt-8 bg-black text-green-500 p-4 rounded-lg border-4 border-green-500"
	>
		<div class="h-80 overflow-auto">
			{#each history as line, index (index)}
				<div class={line.type === "input" ? "text-white" : "text-green-500"}>
					{#if line.type === "input"}>
					{/if}
					{line.content}
				</div>
			{/each}
		</div>

		<form onsubmit={handleSubmit} class="mt-4">
			<input
				type="text"
				bind:value={input}
				class="w-full bg-black text-white border border-green-500 focus:border-green-700 rounded p-2"
				placeholder="Type a command...('help' for a list of commands)"
			/>
		</form>
	</div>
{:else}
	<form method="POST">
		<label>
			Enter Decrypted Passphrase:
			<input class="text-black" name="key" type="text" />
		</label>
		<button class="hover:text-red-500">Click Me Submit </button>
	</form>
{/if}
