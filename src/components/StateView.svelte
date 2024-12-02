<script lang="ts">
	import type State from '../types/state/State';
	import GradientBox from './GradientBox.svelte';

	let {
		state,
		name = undefined
	}: {
		state: State;
		name?: string | undefined;
	} = $props();

	let innerWidth: number;

	const getStyle = () => {
		if (innerWidth < 800) {
			return `padding: 10px 5px; min-width: calc(40vw - 10px); text-align: center;`;
		}
		return `padding: 10px 10px; min-width: 150px; text-align: center;`;
	};
</script>

<svelte:window bind:innerWidth />

<div class="state-view">
	{#if name}
		<p class="name">{name}:</p>
	{/if}
	<GradientBox style={getStyle()} gradient={state.getGradient()}>{state.getValue()}</GradientBox>
</div>

<style lang="scss">
	@use '../variables.scss' as *;

	.state-view {
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
	}

	@media (max-width: 800px) {
		.state-view {
			* {
				padding: 10px 5px;
			}
			.name {
				min-width: calc(60vw - 10px);
			}
		}
	}
</style>
