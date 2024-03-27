<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Masthead from './Masthead.svelte';
	import Section from './Section.svelte';
	import Image from './Image.svelte';
	
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

<section class=" text-black grid place-content-center w-full h-5/6 text-4xl origin-top">
	<div
		class="w-[60rem] h-[75rem] bg-amber-100 grid grid-rows-10 grid-cols-6 grid-flow-row gap-y-1 gap-x-1 justify-items-stretch"
	>
		<div class="col-span-6 row-span-1 bg-amber-100 border border-black p-2 grid content-center">
			<Masthead/>
		</div>
		<div
			class="row-span-7 col-span-3 bg-amber-100 border border-black p-4 transition-transform duration-500 dir-right"
		>
			<Section>
				<div slot='headline'>Middle Left</div>
				<div slot='image'><Image src='{base}/picture-of-me.webp'/></div>
			</Section>
		</div>
		<div
			class="row-span-7 col-span-3 bg-amber-100 border border-black p-4 transition-transform duration-500 dir-left"
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
				</div>
			</Section>
		</div>
		<div
			class="row-span-2 col-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500 dir-right"
		>
			<Section>
				<div slot='headline'>Down Left</div>
				<div slot='content'></div>
			</Section>
		</div>
		<div
			class="col-span-2 row-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500"
		>
			<Section>
				<div slot='headline'>Down Middle</div>
				<div slot='content'></div>
			</Section>
		</div>
		<div
			class="col-span-2 row-span-2 bg-amber-100 border border-black p-4 transition-transform duration-500 dir-left"
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
</style>
