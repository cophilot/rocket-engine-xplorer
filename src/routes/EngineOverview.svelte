<script>
	import { getAllEngines } from '../data/allEngines';
	import { goto } from '$app/navigation';
	import StringUtils from '../utils/StringUtils';
	let innerWidth = 0;
	let allEnginenNames = getAllEngines().map((engine) => engine.stats.name);
	$: filteredEngines = allEnginenNames;
	$: searchValue = '';
	const onSerach = () => {
		filteredEngines = allEnginenNames.filter((engine) =>
			engine.toLowerCase().includes(searchValue.toLowerCase())
		);
	};
	const searchClear = () => {
		searchValue = '';
		onSerach();
	};
</script>

<svelte:window bind:innerWidth />

<header>
	<div class="engine-overview">
		<div class={innerWidth < 800 ? 'ver' : 'hor'}>
			<input
				type="text"
				placeholder="Search..."
				on:change={onSerach}
				bind:value={searchValue}
				class="search-bar"
			/>
			<button class="small" on:click={searchClear}>Clear</button>
		</div>
		{#if filteredEngines.length > 0}
			{#each filteredEngines as engine}
				<button
					class="engine-button"
					on:click={() => {
						goto(`/engine/${StringUtils.normalizeString(engine)}`);
					}}>> {engine}</button
				>
			{/each}
		{:else}
			<p>
				<i> No Results</i>
			</p>
		{/if}
	</div>
</header>

<style lang="scss">
	.engine-overview {
		display: flex;
		width: 76vw;
		flex-direction: column;
		align-items: start;
		margin-top: 20px;
		margin-bottom: 20px;
		.engine-button {
			width: 50%;
			text-align: left;
		}
	}
	@media (max-width: 800px) {
		.engine-overview {
			width: 100vw;
			.engine-button {
				width: 100%;
			}
			.search-bar {
				width: 90%;
				text-align: left;
			}
		}
	}
</style>
