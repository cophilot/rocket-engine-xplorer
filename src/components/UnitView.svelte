<script lang="ts">
	import type Unit from '../types/units/Unit';

	let {
		unit,
		compareUnit = undefined,
		name = undefined
	}: {
		unit: Unit<number> | null;
		compareUnit?: Unit<number> | undefined;
		name?: string | undefined;
	} = $props();

	const getBackgroundColor = () => {
		if (!compareUnit || !unit) {
			return '';
		}
		if (unit.isBetterThan(compareUnit)) {
			return 'green';
		}
		return 'red';
	};
</script>

<div class="unit-view">
	{#if name}
		<p class="name">{name}:</p>
	{/if}
	{#if unit}
		<p class="value" style={`background: ${getBackgroundColor()}`}>{unit.getValueAsString()}</p>
		<p class="unit">{unit.getUnits()}</p>
	{:else}
		<p class="null-placeholder">-</p>
	{/if}
</div>

<style lang="scss">
	@use '../variables.scss' as *;

	.unit-view {
		display: flex;
		flex-direction: row;
		font-weight: bold;
		max-width: 100vw;
		* {
			padding: 10px 10px;
		}
		.name {
			background: $gradient-primary;
			min-width: 250px;
			text-align: right;
		}
		.null-placeholder {
			text-align: right;
			min-width: 150px;
		}
		.value {
			min-width: 100px;
			text-align: right;
		}
		.unit {
			background: $gradient-secondary;
			color: black;
			min-width: 30px;
			text-align: center;
		}
	}

	@media (max-width: 800px) {
		.unit-view {
			* {
				padding: 10px 5px;
			}
			.null-placeholder {
				padding-right: 20px;
				min-width: calc(40vw - 30px);
			}

			.name {
				min-width: calc(60vw - 10px);
			}
			.value {
				min-width: calc(30vw - 10px);
			}
			.unit {
				min-width: calc(10vw - 10px);
			}
		}
	}
</style>
