<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
	}
</style>
