<script lang="ts">
	import anime, { type AnimeInstance } from 'animejs';
	import { onMount } from 'svelte';

	export let play: boolean=true;
	let was=true;

	let anim: AnimeInstance=anime({});

	onMount(() => {
		anim = anime
			.timeline({
				easing: 'easeOutSine',
				duration: 1000
			})
			.add({
				targets: '#branch #main',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'linear'
			})
			.add(
				{
					targets: '#branch #b #b1',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=800'
			)
			.add(
				{
					targets: '#branch #b #b2',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #e #e1',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b3',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #e #e2',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b4',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b5',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #e #e3',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b6',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #e #e4',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b7',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b8',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=1200'
			)
			.add(
				{
					targets: '#branch #b #b9',
					strokeDashoffset: [anime.setDashoffset, 0]
				},
				'-=900'
			)
			.add(
				{
					targets: '#branch #b #b10',
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'linear'
				},
				'-=1000'
			)
			.add({
				targets: '#branch #b #b11',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeOutCubic'
			})
			.add(
				{
					targets: '#branch #b #b12',
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'easeOutCubic'
				},
				'-=1000'
			);
	});
	
	$: if(play!=was){
		console.log(play,was);
		if(play){
			console.log('fwd')
			anim.play();
			was=true;
		}else if (play==false){
			console.log('bkd')
			anim.reverse();
			was=false;
		}
	}
</script>

<div>
	<svg width="187" height="71" viewBox="0 0 187 71" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="branch">
			<path
				id="main"
				d="M185.75 36.3779C181.271 41.6402 176.893 43.5429 172.75 43.4334C167.642 43.2984 162.891 40.1049 158.75 36.3779C154.472 32.5282 150.439 29.4916 146 29.6337C142.656 29.7407 139.082 31.6517 135 36.3779C130.327 41.7893 126.198 44.4176 121.75 44.4414C117.157 44.4659 115.5 42.7559 106 36.3779C96.5 30 88.5 27 75 36.3779C61.5 45.7559 51 45.7559 39.5 36.3779"
				stroke="#73CD00"
				stroke-width="2%"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<g id="b">
				<path
					id="b1"
					d="M158.75 36.3779C154.083 30.7946 157.098 19.1279 166.75 19.1279C177.75 19.1279 177.25 30.7529 172.75 31.8779C170.75 32.3779 166.75 32.1279 166.75 27.3779"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b2"
					d="M172.75 43.4334C161.55 43.4334 158.75 49.8964 158.75 53.1279C159 55.4613 160.95 60.1779 166.75 60.3779C172.55 60.5779 173.167 55.6279 172.75 53.1279C172.167 51.7113 170.15 49.0279 166.75 49.6279C162.5 50.3779 164.5 56.3779 166.75 55.6279"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b3"
					d="M135 36.3779C127.25 44.8779 135.75 52.0168 138.25 53.1279C142.75 55.1279 148.283 53.1279 148.5 48.1279C148.75 42.3779 142.25 40.628 140 43.378C137.75 46.128 140.25 49.1279 141 49.6279"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b4"
					d="M121.75 44.4414C112 44.4414 112 31.8779 119 31.8779C125.25 31.8779 124.5 37.6279 124.25 38.1279C124 38.6279 121.75 42.3779 118.25 38.8779"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b5"
					d="M106 36.3779C93.5 21.5 100.667 13.1667 106 12.5C111.333 11.8333 114.297 15.032 115 18C115.9 21.8001 112.368 26.5397 108.5 26C105 25.5116 104.052 24 103.5 21C103.069 18.6559 107.5 15 110.5 18"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b6"
					d="M75 36.3779C63.5 45 72.5 55 80.5 56C88.5 57 89.6487 50.5 90 48C90.3513 45.5 90 40 85 38.8779C82.279 38.2673 78.5 39.5 77 43C75.9971 45.3401 77 49.5 81 50"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b7"
					d="M75 36.3779C65 38.8779 62.6667 33.626 62.5 30.5C62.6667 28.3333 62.9126 26.2349 66 25C68.5 24 71.6667 24.5 72.5 27C73.3333 29.5 73 31.8779 70 32.5C68.7908 32.7507 66.7818 31.2155 67 30"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b8"
					d="M39.5 36.3779C39.5 36.3779 31 31.5 29 19C27 6.5 43.5 -3.5 54 3.5C64.5 10.5 59.5 19.5 57.5 22.5C55.5 25.5 47.5 30.5 41 22.5C41 22.5 38 17 41 13C44 9 52.5 8.5 52.5 16.5"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b9"
					d="M29 19C25.5 1.43051e-06 14 0.500001 9 3.5C5 5.9 3 14 6 17.5C9 21 13.25 22.5 17 21C20.75 19.5 20.8644 15.2109 19.5 11.5C18.4474 8.63727 10.5 6.5 10.5 14"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b10"
					d="M39.5 36.3779C28 27 16.5 27.2559 7.5 36.3779C-1.5 45.5 0.500003 56.5 7.5 64C14.5 71.5 27.2372 72.2232 32.5 64C35.8682 58.7372 36.9878 50.3476 32.5 46C28.1524 41.7883 19.9105 40.6926 17 46C15.4039 48.9105 15.4039 52.0895 17 55"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b11"
					d="M17 55C17 55 22 62 26.5 58C31 54 26 48.5 23 50"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="b12"
					d="M17 55C17 55 16.7816 61.1251 11.5 59.5C6.2184 57.8749 9 51 11.5 52"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
			<g id="e">
				<path
					id="e1"
					d="M146 29.6337C146 29.6337 135 31 130 22.5"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="e2"
					d="M135 36.3779C135 36.3779 123 48.5 128 58.5"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="e3"
					d="M106 36.3779C106 36.3779 91.5 28.5 86 18"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="e4"
					d="M75 36.3779C61 45.7779 57.5 57.376 57.5 62"
					stroke="#73CD00"
					stroke-width="2%"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
		</g>
	</svg>
	{play}
</div>

<style>
	div{
		width:fit-content;
	}
</style>