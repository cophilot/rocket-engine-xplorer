<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';
	import { getAllEngines, getRandomEngine } from '../data/allEngines';
	import type Engine from '../types/Engine';

	let {
		engine,
		onEngineChange
	}: {
		engine: Engine | undefined;
		onEngineChange: (engineName: string) => void;
	} = $props();

	if (!engine) {
		engine = getRandomEngine();
	}

	let selectedEngine = $state(engine.stats.name);

	const allEngines = getAllEngines();
</script>

<div class="comparison-box">
	<select bind:value={selectedEngine}
	onchange={() => onEngineChange(selectedEngine)}
	>
		{#each allEngines as engine}
			<option value={engine.stats.name}>{engine.stats.name}</option>
		{/each}
	</select>
	<h1>
		{engine.stats.name}
	</h1>
	<img src={engine.stats.imageUrl} alt="" />
</div>

<style lang="scss">
	.comparison-box {
		display: flex;
		width: 48vw;
		flex-direction: column;
		align-items: center;
		img {
			width: auto;
			height: 300px;
		}
	}

	@media (max-width: 800px) {
		.comparison-box {
			img {
				height: 200px;
			}
		}
	}
</style>
