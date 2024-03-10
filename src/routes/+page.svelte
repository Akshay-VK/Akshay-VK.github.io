<script lang="ts">
	import anime from 'animejs';
	import Canvas from './Canvas.svelte';
	import Branch from './Branch.svelte';
	import { onMount } from 'svelte';
	//import { writable } from 'svelte/store';

	/**
	 * @type {anime.AnimeInstance}
	 */
	let anim;

	let a = 0,b=0;
	onMount(()=>{
		a=1;
	})

	function forward(
		_node: HTMLDivElement,
		{ targets, duration }: { targets: string; duration: number }
	) {
		var textWrapper = document.querySelectorAll('.hero-name strong div');
		textWrapper[0].innerHTML =
			textWrapper[0].textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
		textWrapper[1].innerHTML =
			textWrapper[1].textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
		textWrapper[2].innerHTML =
			textWrapper[2].textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
		console.log(textWrapper);
		return {
			css: (_t: any) => {
				anime({
					targets: '.hero-name strong .letter',
					opacity: [0, 1],
					easing: 'easeInOutQuad',
					duration,
					delay: (_el, i) => 30 * (i + 1),
					complete:(_an)=>{b=1;}
				});
				return '';
			}
		};
	}

	let play = true;
</script>

<svelte:head>
	<title>Karuvathil Akshay Vijaykumar</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if a == 1}
		<div class="font-serif justify-center">
			<div
				class="hero-name w-1/3 flex flex-col mx-96 mt-24"
				in:forward={{ targets: '.hero-name', duration: 3000 }}
			>
				<strong
					class="text-zinc-300 text-6xl flex flex-wrap justify-center"
					on:mouseenter={(_e) => {
						console.log(1);
						play = true;
					}}
					on:mouseleave={(_e) => {
						play = false;
						console.log(2)
					}}
				>
					<div class="justify-center p-1">Karuvathil</div>
					<div class="justify-center text-white p-1">Akshay</div>
					<div class="justify-center p-1">Vijaykumar</div>
				</strong>
				<div class="place-self-end"><Branch {play} /></div>
			</div>
			<div class="can">
				<Canvas />
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	* {
		overflow: hidden;
	}
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
	#hero-name {
		position: fixed;
		inset: 0px;
		width: 12rem;
		height: 5rem;
		max-width: 100vw;
		max-height: 100dvh;
		margin: auto;
	}
</style>
