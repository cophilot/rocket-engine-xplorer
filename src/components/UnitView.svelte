<script lang="ts">
	import type Unit from '../types/units/Unit';

	let {
		unit,
		compareUnit = undefined,
		name = undefined
	}: {
		unit: Unit<number>;
		compareUnit?: Unit<number> | undefined;
		name?: string | undefined;
	} = $props();

	const getBackgroundColor = () => {
		if (!compareUnit) {
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
	<p class="value"
	style={`background: ${getBackgroundColor()}`}
	>{unit.getValue()}</p>
	<p class="unit">{unit.getUnits()}</p>
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
			min-width: 200px;
			text-align: right;
		}
		.value{
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
</style>
