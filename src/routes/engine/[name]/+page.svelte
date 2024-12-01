<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getEngineByName } from '../../../data/allEngines';
	import UnitView from '../../../components/UnitView.svelte';

	let engine = getEngineByName($page.params.name);
</script>

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
{:else}
	<h1>Engine not found</h1>
{/if}

<button
	on:click={() => {
		goto('/');
	}}
>
	<i class="bi bi-house"></i> Home
</button>

<style>
	.engine-img {
		max-width: 20vw;
	}

	@media (max-width: 800px) {
		.engine-img {
			max-width: 60vw;
		}
	}
</style>
