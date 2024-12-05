<script lang="ts">
	import type State from '../types/state/State';
	import GradientBox from './GradientBox.svelte';

	let {
		myState,
		name = undefined
	}: {
		myState: State;
		name?: string | undefined;
	} = $props();

	let innerWidth: number = $state(0);

	const getStyle = () => {
		let fontStyle = '';
		if (myState.getFontSize()) {
			fontStyle += `font-size: ${myState.getFontSize()}; `;
		}

		let paddingX = 10;
		let paddingY = 10;
		let minWidth ="150px";
		if (innerWidth < 800) {
			paddingX = 5;
			minWidth = "calc(40vw - 10px)";
		}

		if(myState.getSecondLine()) {
			paddingY = 0;
		}

		return `${fontStyle}padding: ${paddingY}px ${paddingX}px; min-width: ${minWidth}; text-align: center;`;
	};
</script>

<svelte:window bind:innerWidth />

<div class="state-view">
	{#if name}
		<p class="name">{name}:</p>
	{/if}
	<GradientBox style={getStyle()} gradient={myState.getGradient()} lineTwo={myState.getSecondLine()}>{myState.getValue()}</GradientBox
	>
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
