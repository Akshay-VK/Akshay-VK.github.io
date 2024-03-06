<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import Canvas from './Canvas.svelte';

	/**
	 * @type {anime.AnimeInstance}
	 */
	let anim;

	let a = 0;
	onMount(() => {
		a = 1;
	});

	function forward(
		_node: HTMLDivElement,
		{ targets, duration }: { targets: string; duration: number }
	) {
		var textWrapper: HTMLSpanElement = document.querySelector(
			'.hero-name strong'
		) as HTMLSpanElement;
		textWrapper.innerHTML =
			textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
		console.log(textWrapper);
		return {
			css: (_t: any) => {
				anime({
					targets: '.hero-name strong .letter',
					opacity: [0, 1],
					easing: 'easeInOutQuad',
					duration,
					delay: (_el, i) => 30 * (i +1)
				});
				return '';
			}
		};
	}
	
</script>

<svelte:head>
	<title>Karuvathil Akshay Vijaykumar</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if a == 1}
		<h1 class="font-serif">
			<div class="hero-name" in:forward={{ targets: '.hero-name', duration: 3000 }}>
				<strong class="text-sky-50 text-6xl">Karuvathil Akshay Vijaykumar</strong>
			</div>
			<div class='can'>
				<Canvas/>
			</div>
		</h1>
	{/if}
</section>

<style lang="postcss">
	.can {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}
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
