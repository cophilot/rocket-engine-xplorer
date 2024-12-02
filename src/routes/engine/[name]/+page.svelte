<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getEngineByName } from '../../../data/allEngines';
	import UnitView from '../../../components/UnitView.svelte';
	import HomeButton from '../../../components/HomeButton.svelte';
	import StringUtils from '../../../utils/StringUtils';

	let engine = getEngineByName($page.params.name);
</script>

<svelte:head>
	<title>{engine?.stats.name || '404'} - Rocket Engine Xplorer</title>
</svelte:head>

{#if engine}
	<h1>
		{engine.stats.name}
	</h1>
	<img src={engine.stats.imageUrl} alt="" class="engine-img mb" />
	<UnitView unit={engine.stats.specificImpulseSeaLevel} name="Specific Impulse" />
	<UnitView unit={engine.stats.specificImpulseVacuum} name="Specific Impulse (Vac)" />
	<UnitView unit={engine.stats.height} name="Height" />
	<UnitView unit={engine.stats.diameter} name="Diameter" />
	<UnitView unit={engine.stats.massDry} name="Mass" />
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

	@media (max-width: 800px) {
		.engine-img {
			max-width: 60vw;
		}
	}
</style>
