<script lang="ts">
	import { base } from '$app/paths';
	//import img from '/picture-of-me.webp';
	//import img from '$lib/images/picture-of-me.jpg';
	const today = new Date();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	function getsuffix(date: number): string {
		switch (date % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}

	const month = months[today.getMonth()];
	const date = today.getDate();
	const year = today.getFullYear();

	let when = (
		days[today.getDay()].toUpperCase() +
		', ' +
		date +
		getsuffix(date) +
		' ' +
		month +
		', ' +
		year
	).toUpperCase();
</script>

<svelte:head>
	<title>Karuvathil Akshay Vijaykumar</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class=" text-black grid place-content-center w-full h-5/6 text-4xl origin-top">
	<div
		class="w-[60rem] h-[75rem] bg-amber-100 grid grid-rows-10 grid-cols-6 grid-flow-row gap-y-4 gap-x-1 justify-items-stretch"
	>
		<div class="col-span-6 row-span-1 bg-amber-100 border border-black p-2 grid content-center">
			<div class="text-xs text-center font-serif underline">
				KARUVATHIL AKSHAY VIJAYKUMAR&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ESTABLISHED
				2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ENGLISH&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PRICE:
				FREE&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PAGES 5&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{when}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;BENGALURU,
				INDIA
			</div>
			<div class="text-center text-6xl">KARUVATHIL AKSHAY VIJAYKUMAR</div>
			<div class="text-xs text-center font-serif text-gray-500">
				Inclusive of About Me | My Achievements | My Cocurriculars | My Accolades | My Ambition
			</div>
		</div>
		<div class="row-span-7 col-span-3 bg-amber-100 border border-black p-4">
			<div>Middle Left</div>
			<div>
				<img src='{base}/picture-of-me.jpg' alt="Sup."  class="sepia hover:sepia-0 transition duration-500 w-2/3 contrast-75 hover:contrast-100 border border-black float-left p-1 m-2"/>
			</div>
			<div class="text-base body-style">
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
		</div>
		<div
			class="row-span-7 col-span-3 bg-amber-100 focus:bg-red-500 border border-black p-4 hover:z-10 origin-top-left hover:-translate-x-1/3 hover:origin-center hover:scale-125 transition-transform duration-500"
		>
			Middle Right
			<div class="text-base body-style">
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
		</div>
		<div class="row-span-2 col-span-2 bg-amber-100 border border-black p-4">Down Left</div>
		<div class="col-span-2 row-span-2 bg-amber-100 border border-black p-4">Down Middle</div>
		<div class="col-span-2 row-span-2 bg-amber-100 border border-black p-4">Down Right</div>
	</div>
</section>

<style lang="postcss">
	.body-style {
		font-family: 'Times New Roman', Times, serif;
	}
</style>
