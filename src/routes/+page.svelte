<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="font-mono">
		<div><strong class="text-sky-50 text-7xl">Hello.</strong></div>
		<div><strong class="text-7xl text-sky-50">My name is </strong></div>
		<div class="name leading-[1.25]">
			<strong class="text-[275px] text-sky-50">Akshay</strong>
		</div>
		<canvas id='can'>Not supported.</canvas>
		
	</h1>

	<Counter />
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
	canvas{
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}
	.name {
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: 0.5em solid lightgray; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto;
		letter-spacing: 0.3em; /* Adjust as needed */
		animation:
			typing 1.5s steps(6, end),
			blink-caret 0.5s step-end infinite;
	}
	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: lightgray;
		}
	}
</style>
