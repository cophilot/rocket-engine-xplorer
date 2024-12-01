<script lang="ts">
	import EngineOverview from './EngineOverview.svelte';
	import ComparisonView from './ComparisonView.svelte';
	import logo from '$lib/images/logo.png';
</script>

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

<style>
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
