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
		class="w-[60rem] aspect-[4/5] bg-amber-100 grid grid-rows-10 grid-cols-6 grid-flow-row gap-y-1 gap-x-1 justify-items-stretch  origin-top-left"
	>
		<div class="main-heading col-span-6 row-span-1 bg-amber-100 border border-black p-2 grid content-center">
			<Masthead/>
		</div>
		<div class="main-heading col-span-6 row-span-1 border p-2 grid content-center transition-transform duration-500">
			<Headline>FROM PIXELS TO PLANETS, HERE'S MY STORY</Headline>
		</div>
		<div
			class="row-span-6 col-span-3 bg-amber-100 border border-black p-4 transition-transform duration-500 overflow-hidden mb-1 dir-right"
		>
			<!-- This is how the Section works....divs are used with the slot attribute to define
			various parts of the main section like the headline, an image of it, the content the article,
			and deck etc.  -->
			<Section>
				<div slot='headline'>So..who am I?</div>
				<div slot='deck'>Well, many things.</div>
				<div slot='image'><Image src='{base}/picture-of-me.webp'/></div>
			</Section>
		</div>
		<div
			class="row-span-6 col-span-3 bg-amber-100 border border-black p-4 transition-transform duration-500  overflow-hidden mb-1 dir-left"
		>
			<Section>
				<div slot="headline">Middle Right</div>
				<div slot="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ligula.
					Pellentesque aliquet id orci vel aliquam. Fusce egestas tincidunt lacus, vel gravida enim
					imperdiet in. Quisque eget rutrum eros. Nullam ac velit sapien. Nulla dignissim justo at
					massa iaculis dignissim. Integer eleifend semper metus in viverra. Suspendisse tempor in
					enim vitae finibus. Cras dapibus faucibus varius. In in viverra odio. Donec id tellus eget
					mauris congue congue. Aliquam erat volutpat. Proin tempor massa vitae sapien maximus, at
					sagittis nisi porta. Proin eu suscipit mi, ac fringilla metus. Fusce sed urna non felis
					lobortis venenatis. Integer risus enim, aliquam nec erat vel, maximus auctor velit. Aliquam
					tincidunt tellus nec tortor lobortis, non eleifend arcu pellentesque. Fusce varius justo at
					congue convallis. Donec neque quam, placerat id condimentum ut, blandit eu nisi. Etiam
					pharetra consequat est, ut condimentum neque pellentesque feugiat. Aliquam tellus turpis,
					mollis vel facilisis vitae, imperdiet vel mauris. Proin sollicitudin purus eget leo
					hendrerit, quis ultricies metus condimentum. Nunc gravida vitae quam sit amet molestie.
					Proin eu sodales nunc. Curabitur vehicula facilisis gravida.
					<Link text="Continued on page 2 "/>
				</div>
			</Section>
		</div>
		<div
			class="row-span-2 col-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500 overflow-hidden mb-1 dir-right"
		>
			<Section>
				<div slot='headline'>Down Left</div>
				<div slot='content'></div>
			</Section>
		</div>
		<div
			class="col-span-2 row-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500 overflow-hidden mb-1"
		>
			<Section>
				<div slot='headline'>Down Middle</div>
				<div slot='content'></div>
			</Section>
		</div>
		<div
			class="col-span-2 row-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500  overflow-hidden mb-1 dir-left"
		>
			<Section>
				<div slot='headline'>Down Right</div>
				<div slot='content'>Yea. I must say, this works pretty well. Love it.</div>
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
