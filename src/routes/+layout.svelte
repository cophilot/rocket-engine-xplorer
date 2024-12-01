<script lang="ts">
	import '../app.scss';
	import logo from '$lib/images/logo.png';
	import WindowUtils from '../utils/WindowUtils';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rocket Engine Xplorer</title>
	<meta name="description" content="Rocket Engine Xplorer" />
	<link rel="icon" type="image/png" href={logo} />
</svelte:head>

<div class="app">
	<img src={logo} alt="" class="logo" />
	{@render children()}
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
		font-size: 16px;
	}

	.logo {
		margin-top: 20px;
		width: 200px;
		height: 200px;
	}

	@media (max-width: 800px) {
		.app {
			width: 100vw;
		}
		.logo {
			width: 100px;
			height: 100px;
		}
	}
</style>
