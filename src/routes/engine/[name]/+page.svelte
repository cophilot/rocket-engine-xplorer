<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getEngineByName } from '../../../data/allEngines';

	let engine = getEngineByName($page.params.name);
</script>

{#if engine}
	<h1>
		{engine.stats.name}
	</h1>
{:else}
	<h1>Engine not found</h1>
{/if}

<button
	on:click={() => {
		goto('/');
	}}
>
	Home
</button>

<style>
</style>
