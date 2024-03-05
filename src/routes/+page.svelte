<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="font-serif">
		<div>
			<strong class="text-sky-50 text-6xl">Karuvathil Akshay Vijaykumar</strong>
		</div>
		<canvas id="can">Not supported.</canvas>
	</h1>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}
	h1 {
		animation: fadeInAnimation ease 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
	}

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
