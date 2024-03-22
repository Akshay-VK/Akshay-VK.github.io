<script>
	import Header from './Header.svelte';
	import '../app.css';
	import './styles.css';
</script>

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wdth,wght,GRAD@0,8..144,82.3,100..900,-27&display=swap');
	*{
		font-family: "Roboto Serif";
		font-optical-sizing: auto;
		font-variation-settings:
			"wght" 800,
			"opsz" 100,
			"ital" 0,
			"wdth" 50,
			"GRAD" -50;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: black;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
