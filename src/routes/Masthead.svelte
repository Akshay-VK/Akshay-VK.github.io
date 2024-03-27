<script lang="ts">
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

<div class="text-xs text-center font-serif underline">
    KARUVATHIL AKSHAY VIJAYKUMAR&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ESTABLISHED
    2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ENGLISH&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PRICE:
    FREE&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PAGES 5&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{when}&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;BENGALURU,
    INDIA
</div>
<div class="text-center text-6xl">KARUVATHIL AKSHAY VIJAYKUMAR</div>
<div class="text-xs text-center font-serif text-gray-800">
    Inclusive of About Me | My Achievements | My Cocurriculars | My Accolades | My Ambition
</div>

<style>

</style>