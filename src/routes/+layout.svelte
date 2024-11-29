<script>
	import '../app.scss';
	import ComparisonView from './ComparisonView.svelte';
	import EngineOverview from './EngineOverview.svelte';
	import logo from '../assets/logo.png';
	let title = 'Rocket Engine Xplorer';
</script>

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Rocket Engine Xplorer" />
	<meta name="keywords" content="rocket, engine, xplorer" />
	<meta name="author" content="Philipp B." />
	<link rel="icon" type="image/svg+xml" href={logo} />
	<title>{title}</title>
</head>

<div class="app">
	<img src={logo} alt="" class="logo" />
	<h1>Rocket Engine Xplorer</h1>
	<p class="info">
		Welcome to the Rocket Engine Xplorer! This is a simple web app that allows you to explore and
		compare the different rocket engines that have been used in space exploration.
	</p>
	<EngineOverview />
	<ComparisonView></ComparisonView>
	<p class="by info">
		By
		<a href="https://philipp-bonin.com/" target="_blank">Philipp B.</a>
	</p>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
	}
	.by {
		margin: 50px;
	}

	.logo {
		margin-top: 20px;
		width: 200px;
		height: 200px;
	}

	@media (max-width: 600px) {
		.info {
			font-size: 0.8rem;
		}
	}
	@media (max-width: 768px) {
		.app {
			width: 100vw;
		}
		.logo {
			width: 100px;
			height: 100px;
		}
	}
</style>
