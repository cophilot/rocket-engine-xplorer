<script lang="ts">
	import type State from '../types/state/State';
	import DefaultGradients from '../utils/DefaultGradients';
	import GradientBox from './GradientBox.svelte';

	let {
		myState,
		name = undefined,
		noMarginTop = false,
		noMarginBottom = false
	}: {
		myState: State;
		name?: string | undefined;
		noMarginTop?: boolean;
		noMarginBottom?: boolean;
	} = $props();

	let innerWidth: number = $state(0);

	const getPaddings = (ignoreSecondLine: boolean = false) => {
		let paddingX = 10;
		let paddingY = 10;
		if (innerWidth < 800) {
			paddingX = 5;
		}
		if (myState.getSecondLine() && !ignoreSecondLine) {
			paddingY = 0;
		}
		return `${paddingY}px ${paddingX}px`;
	};

	const getLabelStyle = () => {
		let minWidth = '250px';
		if (innerWidth < 800) {
			minWidth = 'calc(60vw - 10px)';
		}
		return `min-width: ${minWidth}; padding: ${getPaddings(true)};`;
	};

	const getStyle = () => {
		let fontStyle = '';
		if (myState.getFontSize()) {
			fontStyle += `font-size: ${myState.getFontSize()}; `;
		}

		let minWidth = '150px';
		if (innerWidth < 800) {
			minWidth = 'calc(40vw - 10px)';
		}

		return `${fontStyle}padding: ${getPaddings()}; min-width: ${minWidth}; text-align: center;`;
	};
</script>

<svelte:window bind:innerWidth />

<div class="state-view">
	{#if name}
		<GradientBox
			style={getLabelStyle()}
			gradient={DefaultGradients.PRIMARY}
			alignTextRight
			{noMarginTop}
			{noMarginBottom}>{name}:</GradientBox
		>
	{:else}
		<GradientBox
			style={getLabelStyle()}
			gradient={DefaultGradients.TRANSPARENT}
			{noMarginTop}
			{noMarginBottom}
		></GradientBox>
	{/if}
	<GradientBox
		style={getStyle()}
		gradient={myState.getGradient()}
		lineTwo={myState.getSecondLine()}
		{noMarginTop}
		{noMarginBottom}>{myState.getValue()}</GradientBox
	>
</div>

<style lang="scss">
	@use '../variables.scss' as *;

	.state-view {
		display: flex;
		flex-direction: row;
		font-weight: bold;
		max-width: 100vw;
	}
</style>
