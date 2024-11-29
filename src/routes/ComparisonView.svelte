<script>
	import ComparisonBox from './ComparisonBox.svelte';
</script>

<header>
	<div class="comparison-view">
		<ComparisonBox />
		<ComparisonBox />
	</div>
</header>

<style lang="scss">
	.comparison-view {
		display: flex;
		width: 100vw;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
</style>
