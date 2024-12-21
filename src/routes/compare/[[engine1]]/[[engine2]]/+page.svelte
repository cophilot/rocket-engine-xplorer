<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import HomeButton from '../../../../components/HomeButton.svelte';
	import {
		getAllEngines,
		getEngineByName,
		getEngineByNameOrRandom,
		getRandomEngine
	} from '../../../../data/allEngines';
	import ComparisonView from '../../../../components/ComparisonView.svelte';
	import { onMount } from 'svelte';

	let engine1 = $state(getEngineByNameOrRandom($page.params.engine1 || ''));
	let engine2 = $state(getEngineByNameOrRandom($page.params.engine2 || ''));

	const reload = () => {
		goto(`/compare/${engine1!.urlName}/${engine2!.urlName}`);
	};

	onMount(() => {
		reload();
	});
</script>

<svelte:head>
	<title
		>{engine1?.stats.name || '404'} | {engine2?.stats.name || '404'} - Rocket Engine Xplorer</title
	>
</svelte:head>

<ComparisonView
	{engine1}
	{engine2}
	onEngineChange1={(engineName: string) => {
		engine1 = getEngineByNameOrRandom(engineName);
		reload();
	}}
	onEngineChange2={(engineName: string) => {
		engine2 = getEngineByNameOrRandom(engineName);
		reload();
	}}
/>

<HomeButton />

<style lang="scss">
	@media (max-width: 800px) {
	}
</style>
