<script>
	import Header from './Header.svelte';
	import '../app.scss';
	import ComparisonView from './ComparisonView.svelte';
	import EngineOverview from './EngineOverview.svelte';
</script>

<div class="app">
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

	@media (max-width: 600px) {
		.info {
			font-size: 0.8rem;
		}
	}
@media (max-width: 768px) {
	.app {
		width: 100vw;
	}
	}

</style>
