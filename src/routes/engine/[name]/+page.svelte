<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getEngineByName } from '../../../data/allEngines';
	import UnitView from '../../../components/UnitView.svelte';
	import HomeButton from '../../../components/HomeButton.svelte';
	import StringUtils from '../../../utils/StringUtils';
	import StateView from '../../../components/StateView.svelte';
	import State from '../../../types/state/State';
	import { Cost } from '../../../types/units/Cost';
	import StateUtils from '../../../utils/StateUtils';

	let engine = getEngineByName($page.params.name);

	const getRocketsForEngine = () => {
		return engine?.stats.rockets || [];
	};
</script>

<svelte:head>
	<title>{engine?.stats.name || '404'} - Rocket Engine Xplorer</title>
</svelte:head>

{#if engine}
	<div class="engine-name glass">
		<h1>
			{engine.stats.name}
		</h1>
	</div>
	<img src={engine.stats.imageUrl} alt="" class="engine-img mb mt" />
	<StateView myState={engine.stats.country} name="Origin" />
	{#if engine.stats.company}
		<StateView myState={engine.stats.company} name="Company" />
	{/if}
	<StateView myState={engine.stats.status} name="Status" />
	<StateView myState={new State(engine.stats.firstFlight)} name="First Flight" />
	{#each getRocketsForEngine() as rocket, i}
		<StateView
			myState={rocket}
			name={i == 0 ? 'Used in' : undefined}
			noMarginTop={i != 0}
			noMarginBottom={i != getRocketsForEngine().length - 1}
		/>
	{/each}
	{#if engine.stats.latestVersion}
		<StateView myState={new State(engine.stats.latestVersion)} name="Latest Version" />
	{/if}

	<StateView myState={engine.stats.propellant} name="Propellant" />
	<StateView myState={engine.stats.cycle} name="Cycle" />
	{#if engine.stats.reusable !== undefined}
		<StateView myState={StateUtils.boolToState(engine.stats.reusable)} name="Reusable" />
	{/if}
	{#if engine.stats.specificImpulseSeaLevel}
		<UnitView unit={engine.stats.specificImpulseSeaLevel} name="Specific Impulse" />
	{/if}
	<UnitView unit={engine.stats.specificImpulseVacuum} name="Specific Impulse (Vac)" />
	<UnitView unit={engine.stats.height} name="Height" />
	<UnitView unit={engine.stats.diameter} name="Diameter" />
	<UnitView unit={engine.stats.massDry} name="Mass" />
	{#if engine.stats.cost}
		<UnitView unit={engine.stats.cost || null} name="Cost" />
	{/if}
	<button
		class="mt"
		on:click={() => {
			goto('/');
		}}
	>
		<i class="bi bi-box-arrow-up"></i> Export
	</button>
	<button
		on:click={() => {
			goto('/compare/' + StringUtils.normalizeString(engine.stats.name));
		}}
	>
		<i class="bi bi-layout-split"></i> Compare
	</button>
{:else}
	<h1>Engine not found</h1>
{/if}

<HomeButton />

<style lang="scss">
	.engine-img {
		max-width: 20vw;
	}
	.engine-name {
		position: sticky;
		top: 70px;
		width: 100%;
		h1 {
			margin: 0;
		}
	}

	@media (max-width: 800px) {
		.engine-img {
			max-width: 60vw;
		}
	}
</style>
