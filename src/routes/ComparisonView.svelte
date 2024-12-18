<script lang="ts">
	import ComparisonBox from './ComparisonBox.svelte';
	import type Engine from '../types/Engine';

	let {
		engine1,
		engine2,
		onEngineChange1,
		onEngineChange2
	}: {
		engine1: Engine | undefined;
		engine2: Engine | undefined;
		onEngineChange1: (engineName: string) => void;
		onEngineChange2: (engineName: string) => void;
	} = $props();
</script>

<div class="comparison-view mb">
	<ComparisonBox
		engine={engine1}
		comparisonEngine={engine2}
		onEngineChange={onEngineChange1}
		isFirst
	/>
	<ComparisonBox engine={engine2} comparisonEngine={engine1} onEngineChange={onEngineChange2} />
</div>

<style lang="scss">
	.comparison-view {
		display: flex;
		width: 100vw;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
</style>
