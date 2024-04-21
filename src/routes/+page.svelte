<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Masthead from './Masthead.svelte';
	import Section from './Section.svelte';
	import Image from './Image.svelte';
	import Link from './Link.svelte';
	import Headline from './Headline.svelte';

	onMount(() => {
		let elem = Array.from(document.querySelectorAll('.bg-amber-100'));
		elem.shift();
		elem.shift();
		elem.pop();
		console.log(elem);
		let elementMap=new Map();
		elem.forEach((element) => {
			let classes = ['z-10', 'scale-125'];
			/*
				if the element has dir-right( elements on the left should have it), then it will translate in the right direction on click
				and vice versa for dir-left and the respective classes get added to the classlist of the elemnt.
			*/
			if (element.classList.contains('dir-right')) {
				classes.push('translate-x-1/3');
			} else if (element.classList.contains('dir-left')) {
				classes.push('-translate-x-1/3');
			}
			elementMap.set(element,classes);
			classes.forEach((cl) => {
				element.classList.remove(cl);
			});
			element.addEventListener('click', () => {
				for (let clicked of elem) {
					if(clicked===element){
						elementMap.get(clicked).forEach((cl: string) => {
							clicked.classList.toggle(cl);
						});
					}else{
						elementMap.get(clicked).forEach((cl: string) => {
							clicked.classList.remove(cl);
						});
					}
				}
			});
		});
	});
</script>

<svelte:head>
	<title>Karuvathil Akshay Vijaykumar</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class=" text-black grid w-full h-5/6 text-4xl overflow-x-auto">
	<div
		class="w-[60rem] aspect-[2/3] bg-amber-100 grid grid-rows-21 grid-cols-10 grid-flow-row gap-y-1 gap-x-1 justify-items-stretch  origin-top-left"
	>
		<div class="main-heading col-span-10 row-span-1 bg-amber-100 border border-black p-2 grid content-center">
			<Masthead/>
		</div>
		<div class="main-heading col-span-10 row-span-1 border p-2 grid content-center transition-transform duration-500">
			<Headline>FROM PIXELS TO PLANETS, HERE'S MY STORY</Headline>
		</div>
		<div
			class="row-span-8 col-span-5 bg-amber-100 border border-black p-4 transition-transform duration-500 overflow-hidden mb-1 dir-right"
		>
			<!-- This is how the Section works....divs are used with the slot attribute to define
			various parts of the main section like the headline, an image of it, the content the article,
			and deck etc.  -->
			<Section>
				<div slot='headline'>So..who am I?</div>
				<div slot="content">
					Lorem ipsum dolor sit amet
					<Link text="Continued on page 2 " to="/about"/>
				</div>
				<div slot='deck'>Well, many things.</div>
				<div slot='image'><Image src='{base}/picture-of-me.webp'/></div>
			</Section>
		</div>
		<div
			class="row-span-8 col-span-5 bg-amber-100 border border-black p-4 transition-transform duration-500  overflow-hidden mb-1 dir-left"
		>
			<Section>
				<div slot="headline">In the spotlight</div>
				<div slot="content">
					Lorem ipsum dolor sit amet
					<Link text="Continued on page 3 " to="/projects"/>
				</div>
			</Section>
		</div>
		<div
			class="row-span-10 col-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500 overflow-hidden mb-1 dir-right"
		>
			<Section>
				<div slot='headline'>Looking forward</div>
				<div slot='content'>
					Blha blah
				</div>
			</Section>
		</div>
		<div
			class="col-span-4 row-span-10 bg-amber-100 border border-black p-4 transition-transform duration-500 overflow-hidden mb-1"
		>
			<Section>
				<div slot='headline'>Timeline of success</div>
				<div slot='content'>
					<Link text="Continued on page 4 " to="/timeline"/>
				</div>
			</Section>
		</div>
		<div
			class="col-span-4 row-span-6 bg-amber-100 border border-black p-4 transition-transform duration-500  overflow-hidden mb-1 dir-left"
		>
			<Section>
				<div slot='headline'>Skills and experience</div>
				<div slot='content'>
					Yea. I must say, this works pretty well. Love it.
					<Link text="Continued on page 5 " to="/skillsandexperience"/>
				</div>
			</Section>
		</div>
		<div
			class="col-span-4 row-span-4 bg-amber-100 border border-black p-4 transition-transform duration-500  overflow-hidden mb-1 dir-left"
		>
			<Section>
				<div slot='headline'>Beyond academics</div>
				<div slot='content'>
					<ul class="list-disc pl-2">
						<li>I am pretty good at swimming, badminton and volleyball and have kept developing my skills in these ever since I learnt them.</li>
						<li>I have a big interest in creative coding and have made many simulations using many algorithms such as Diffusion Aggregated Simulation and I also made a ray tracing engine.</li>
						<li>I am a keen reader with an interest in fantasy novels set in huge worlds like the Game of Thrones, Percy Jackson.</li>
						<li>I also love puzzles like Rubik's cubes and have quite a collection of them.</li>
					</ul>
					<Link text="Continued on page 6 " to="/beyondacademics"/>
				</div>
			</Section>
		</div>
		<div
			class="col-span-10 row-span-1 bg-amber-100 border border-black p-4 transition-transform duration-500  overflow-hidden mb-1 dir-right"
		>
			<Section>
				<div slot='headline'>Contact</div>
				<div slot='content'>Hey! You can reach me at my Gmail <span class="font-bold italic hover:underline">akshaykaruvathil@gmail.com</span></div>
			</Section>
		</div>
	</div>
</section>

<style lang="postcss">
	.body-style {
		font-family: 'Times New Roman', Times, serif;
		text-align: justify;
	}
	/* custom scrollbar */
	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #969b9c;
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
</style>
