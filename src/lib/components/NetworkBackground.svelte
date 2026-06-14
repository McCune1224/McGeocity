<script lang="ts">
	import { browser } from "$app/environment";
	import { themeStore } from "$lib/stores/themeStore.svelte";

	// ---- Types ------------------------------------------------------------

	interface Node {
		x: number;
		y: number;
		vx: number;
		vy: number;
	}

	// ---- Canvas state -----------------------------------------------------

	let canvasEl = $state<HTMLCanvasElement | null>(null);
	let width = $state(0);
	let height = $state(0);
	let accent: [number, number, number] = [208, 112, 80];
	let nodes = $state<Node[]>([]);
	let reducedMotion = $state(false);
	let staticFrameDrawn = $state(false);
	let frameId = $state(0);
	let lastDraw = $state(0);

	// ---- Constants --------------------------------------------------------

	const NODE_COUNT = 30;
	const CONNECTION_DIST = 200;
	const MAX_CONNECTIONS = 4;
	const SPEED = 0.18;
	const FRAME_MS = 33; // ~30 fps

	// ---- Helpers ----------------------------------------------------------

	function getCSSColor(token: string): [number, number, number] {
		if (!browser) return [208, 112, 80];
		const raw = getComputedStyle(document.documentElement)
			.getPropertyValue(token).trim();
		const parts = raw.split(/\s+/).map(Number);
		if (parts.length === 3 && parts.every((n) => !isNaN(n))) {
			return parts as [number, number, number];
		}
		return [208, 112, 80];
	}

	function createNodes(w: number, h: number): Node[] {
		return Array.from({ length: NODE_COUNT }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			vx: (Math.random() - 0.5) * SPEED * 2,
			vy: (Math.random() - 0.5) * SPEED * 2,
		}));
	}

	function updateNodes() {
		if (reducedMotion && staticFrameDrawn) return;
		for (const n of nodes) {
			if (!reducedMotion) {
				n.x += n.vx;
				n.y += n.vy;
				// Occasional course change
				if (Math.random() < 0.003) {
					n.vx += (Math.random() - 0.5) * 0.03;
					n.vy += (Math.random() - 0.5) * 0.03;
				}
			}
			// Wrap
			if (n.x < -20) n.x = width + 20;
			if (n.x > width + 20) n.x = -20;
			if (n.y < -20) n.y = height + 20;
			if (n.y > height + 20) n.y = -20;
		}
	}

	function draw(ctx: CanvasRenderingContext2D) {
		const [r, g, b] = accent;
		ctx.clearRect(0, 0, width, height);

		// For each node, find its 4 closest neighbors within CONNECTION_DIST
		for (let i = 0; i < nodes.length; i++) {
			const a = nodes[i];
			const neighbors: { index: number; dist: number }[] = [];

			for (let j = 0; j < nodes.length; j++) {
				if (i === j) continue;
				const dx = a.x - nodes[j].x;
				const dy = a.y - nodes[j].y;
				const dist = dx * dx + dy * dy; // squared distance (cheaper)
				if (dist < CONNECTION_DIST * CONNECTION_DIST) {
					neighbors.push({ index: j, dist });
				}
			}

			// Sort by distance and take top MAX_CONNECTIONS
			neighbors.sort((a, b) => a.dist - b.dist);
			const top = neighbors.slice(0, MAX_CONNECTIONS);

			for (const { index: j, dist } of top) {
				const alpha = (1 - Math.sqrt(dist) / CONNECTION_DIST) * 0.15;
				ctx.strokeStyle = `rgb(${r} ${g} ${b} / ${alpha})`;
				ctx.lineWidth = 0.5;
				ctx.beginPath();
				ctx.moveTo(a.x, a.y);
				ctx.lineTo(nodes[j].x, nodes[j].y);
				ctx.stroke();
			}
		}

		// Draw nodes
		for (const n of nodes) {
			ctx.fillStyle = `rgb(${r} ${g} ${b} / 0.55)`;
			ctx.beginPath();
			ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	function handleResize() {
		if (!canvasEl) return;
		width = window.innerWidth;
		height = window.innerHeight;
		canvasEl.width = width;
		canvasEl.height = height;
		canvasEl.style.width = `${width}px`;
		canvasEl.style.height = `${height}px`;
	}

	function animate(timestamp: number) {
		if (!canvasEl) return;
		const ctx = canvasEl.getContext("2d");
		if (!ctx) return;

		// Throttle to ~30 fps
		if (timestamp - lastDraw < FRAME_MS) {
			frameId = requestAnimationFrame(animate);
			return;
		}
		lastDraw = timestamp;

		updateNodes();
		draw(ctx);

		if (reducedMotion) {
			staticFrameDrawn = true;
			return;
		}

		frameId = requestAnimationFrame(animate);
	}

	// ---- Lifecycle --------------------------------------------------------

	$effect(() => {
		if (browser) {
			void themeStore.isDark;
			accent = getCSSColor("--color-accent-primary");
		}
	});

	$effect(() => {
		if (!browser || !canvasEl) return;

		handleResize();
		nodes = createNodes(width || window.innerWidth, height || window.innerHeight);

		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		reducedMotion = mq.matches;
		const mqHandler = (e: MediaQueryListEvent) => {
			reducedMotion = e.matches;
			if (!e.matches) {
				staticFrameDrawn = false;
				lastDraw = 0;
				frameId = requestAnimationFrame(animate);
			}
		};
		mq.addEventListener("change", mqHandler);

		const ro = new ResizeObserver(() => {
			handleResize();
			nodes = createNodes(width, window.innerHeight);
		});
		ro.observe(document.documentElement);

		const visHandler = () => {
			if (document.hidden) {
				cancelAnimationFrame(frameId);
			} else if (!reducedMotion) {
				lastDraw = 0;
				frameId = requestAnimationFrame(animate);
			}
		};
		document.addEventListener("visibilitychange", visHandler);

		if (reducedMotion) {
			const ctx = canvasEl.getContext("2d");
			if (ctx) { draw(ctx); staticFrameDrawn = true; }
		} else {
			frameId = requestAnimationFrame(animate);
		}

		return () => {
			cancelAnimationFrame(frameId);
			mq.removeEventListener("change", mqHandler);
			ro.disconnect();
			document.removeEventListener("visibilitychange", visHandler);
		};
	});
</script>

<canvas
	bind:this={canvasEl}
	aria-hidden="true"
	class="fixed inset-0 z-0"
	style="pointer-events: none; will-change: transform;"
></canvas>
