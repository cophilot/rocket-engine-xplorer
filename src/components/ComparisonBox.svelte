<script lang="ts">
	import { getAllEngines, getRandomEngine } from '../data/allEngines';
	import type Engine from '../types/Engine';
	import StateView from './StateView.svelte';
	import State from '../types/state/State';
	import UnitView from './UnitView.svelte';
	import Unit from '../types/units/Unit';

	let {
		engine,
		comparisonEngine,
		onEngineChange,
		isFirst = false
	}: {
		engine: Engine;
		comparisonEngine: Engine;
		onEngineChange: (engineName: string) => void;
		isFirst?: boolean;
	} = $props();

	let selectedEngine = $state(engine.stats.name);

	const allEngines = getAllEngines();
</script>

<div class={'comparison-box ' + (isFirst ? 'first' : '')}>
	<div class="engine-name glass">
		<select bind:value={selectedEngine} onchange={() => onEngineChange(selectedEngine)}>
			{#each allEngines as engine}
				<option value={engine.stats.name}>{engine.stats.name}</option>
			{/each}
		</select>
	</div>
	<h1>
		{engine.stats.name}
	</h1>
	<img src={engine.stats.imageUrl} alt="" />
	<p class="label">Origin</p>
	<StateView myState={engine.stats.country} noLabel noMarginTop />
	<div class="line"></div>

	<p class="label">Status</p>
	<StateView myState={engine.stats.status} noLabel noMarginTop />
	<div class="line"></div>

	<p class="label">First Flight</p>
	<StateView myState={new State(engine.stats.firstFlight)} noLabel noMarginTop />
	<div class="line"></div>

	<p class="label">Used in #</p>
	<UnitView
		unit={engine.stats.rockets ? new Unit(engine.stats.rockets.length, '') : null}
		compareUnit={comparisonEngine.stats.rockets
			? new Unit(comparisonEngine.stats.rockets.length, '')
			: null}
	/>
	<div class="line"></div>

	<p class="label">Propellant</p>
	<StateView myState={engine.stats.propellant} noLabel noMarginTop />
	<div class="line"></div>

	<p class="label">Cycle</p>
	<StateView myState={engine.stats.cycle} noLabel noMarginTop />
	<div class="line"></div>

	<p class="label">Specific Impulse</p>
	<UnitView
		unit={engine.stats.specificImpulseSeaLevel}
		compareUnit={comparisonEngine!.stats.specificImpulseSeaLevel}
	/>

	<div class="line"></div>
	<p class="label">Specific Impulse (Vac)</p>
	<UnitView
		unit={engine.stats.specificImpulseVacuum}
		compareUnit={comparisonEngine!.stats.specificImpulseVacuum}
	/>

	<div class="line"></div>
	<p class="label">Height</p>
	<UnitView unit={engine.stats.height} compareUnit={comparisonEngine!.stats.height} />

	<div class="line"></div>
	<p class="label">Diameter</p>
	<UnitView unit={engine.stats.diameter} compareUnit={comparisonEngine!.stats.diameter} />

	<div class="line"></div>
	<p class="label">Mass</p>
	<UnitView unit={engine.stats.massDry} compareUnit={comparisonEngine!.stats.massDry} />

	<div class="line"></div>
	<p class="label">Cost</p>
	<UnitView unit={engine.stats.cost || null} compareUnit={comparisonEngine!.stats.cost} />
</div>

<style lang="scss">
	@use '../variables' as *;

	.engine-name {
		position: sticky;
		top: 70px;
		width: 50vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.comparison-box {
		display: flex;
		width: 30vw;
		flex-direction: column;
		align-items: center;
		.engine-name {
			position: sticky;
		}
		img {
			width: auto;
			height: 300px;
		}
	}
	.label {
		width: 90%;
		padding-left: 20px;
		font-weight: bold;
		color: transparent;
	}

	.line {
		width: 90%;
		height: 1px;
		background-color: $text-color;
		/* 		background: $gradient-secondary;
 */
	}

	.first {
		.label {
			color: $text-color;
		}
		.line {
			margin-left: 30vw;
			padding-right: 30vw;
		}
	}

	@media (max-width: 800px) {
		.comparison-box {
			width: 48vw;

			img {
				height: 200px;
			}
		}
	}
</style>
