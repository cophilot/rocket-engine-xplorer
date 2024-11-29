<script>
	import getAllEngines from '../data/allEngines';

	let allEnginenNames = getAllEngines().map((engine) => engine.name);
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

<header>
	<div class="engine-overview">
		<div class="hor">
			<input type="text" placeholder="Search..." on:change={onSerach} bind:value={searchValue} />
			<button on:click={searchClear}>Clear</button>
		</div>
		{#if filteredEngines.length > 0}
			{#each filteredEngines as engine}
				<button class="engine-button">> {engine}</button>
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
</style>
