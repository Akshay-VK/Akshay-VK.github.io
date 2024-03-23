<script lang="ts">
	const today = new Date();
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	function getsuffix(date:number):string{
		switch (date%10) {
			case 1:
				return 'st'
			case 2:
				return 'nd'
			case 3:
				return 'rd'		
			default:
				return 'th'
		}
	}

	const month = months[today.getMonth()];
	const date = today.getDate();
	const year = today.getFullYear();

	let when= (days[today.getDay()].toUpperCase()+', '+date+getsuffix(date)+' '+month+', '+year).toUpperCase();
</script>

<svelte:head>
	<title>Karuvathil Akshay Vijaykumar</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class='text-black grid place-content-center w-full h-5/6 text-4xl origin-top scale-150'>
	<div class=" w-[60rem] h-[75rem] bg-orange-100 grid grid-rows-10 grid-cols-6 grid-flow-row gap-5 justify-items-stretch">
		<div class="col-span-6 row-span-1 bg-orange-100 border border-black p-2 grid content-center">
			<div class="text-xs text-center font-serif underline text-gray-500">KARUVATHIL AKSHAY VIJAYKUMAR&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ESTABLISHED 2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ENGLISH&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PRICE: FREE&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PAGES 5&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{when}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;BENGALURU, INDIA</div>
			<div class="text-center text-6xl ">
				KARUVATHIL AKSHAY VIJAYKUMAR
			</div>
			<div class="text-xs text-center font-serif text-gray-500">Inclusive of About Me | My Achievements | My Cocurriculars | My Accolades | My Ambition</div>
		</div>
		<div class="row-span-7 col-span-3 bg-orange-100 border border-black p-4 hover:z-10 hover:scale-150 origin-top-left hover:bg-rose-500 transition-transform">Middle Left</div>
		<div class="row-span-7 col-span-3 bg-orange-100 border border-black p-4">Middle Right</div>
		<div class="row-span-2 col-span-2 bg-orange-100 border border-black p-4">Down Left</div>
		<div class="col-span-2 row-span-2 bg-orange-100 border border-black p-4">Down Middle</div>
		<div class="col-span-2 row-span-2 bg-orange-100 border border-black p-4">Down Right</div>
	</div>
</section>

<style lang="postcss">
</style>
