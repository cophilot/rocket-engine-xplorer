<script>
	import getAllEngines from "../data/allEngines";

	let allEnginenNames = getAllEngines().map(engine => engine.name);
	$: filteredEngines = allEnginenNames;

	const onSerach = (e) => {
		const searchValue = e.target.value;
		filteredEngines = allEnginenNames.filter(engine => engine.toLowerCase().includes(searchValue.toLowerCase()));
		
	}
</script>

<header>
	<div class="engine-overview">
		<input type="text" placeholder="Search..."
		on:change={onSerach}
		/>
		{#if allEnginenNames.length > 0}
			{#each allEnginenNames as engine}
				<button>> {engine}</button>
			{/each}
		{:else}
		<p>
			<i>
				No Results Found
			</i>
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
		button {
			width: 50%;
			text-align: left;
		}
	}
</style>
