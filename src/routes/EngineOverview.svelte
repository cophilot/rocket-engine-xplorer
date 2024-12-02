<script>
	import { getAllEngines } from '../data/allEngines';
	import { goto } from '$app/navigation';
	import StringUtils from '../utils/StringUtils';

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

<header>
	<div class="engine-overview">
		<div class="mb search-bar-box">
			<input
				type="text"
				placeholder="Search..."
				onchange={onSerach}
				bind:value={searchValue}
				class="search-bar"
			/>
			<button class="small" onclick={searchClear}>Clear</button>
		</div>
		{#if filteredEngines.length > 0}
			{#each filteredEngines as engine}
				<div class="engine-box">
					<button
						class="engine-button"
						onclick={() => {
							goto(`/engine/${StringUtils.normalizeString(engine)}`);
						}}>> {engine}</button
					>
					<button
						class="compare-button small"
						onclick={() => {
							goto(`/compare/${StringUtils.normalizeString(engine)}`);
						}}
						aria-label="Compare"
					>
						<i class="bi bi-layout-split"></i>
					</button>
				</div>
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
		.engine-box {
			width: 50%;
			display: flex;
			justify-content: space-between;
			.engine-button {
				text-align: left;
				width: 100%;
			}
			.compare-button {
				background: transparent;
				margin-left: -100px;
			}
		}
	}
	.search-bar-box {
		display: flex;
		flex-direction: row;
		.search-bar {
			margin-right: 10px;
		}
	}
	@media (max-width: 800px) {
		.engine-overview {
			width: 100vw;
			.engine-box {
				width: 100%;
			}
			.search-bar-box {
				// flip the order of the search bar and the clear button
				flex-direction: column-reverse;
				button {
					width: 100px;
				}
				.search-bar {
					width: 80vw;
				}
			}
		}
	}
</style>
