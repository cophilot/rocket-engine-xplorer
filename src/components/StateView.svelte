<script lang="ts">
	import type State from '../types/state/State';
	import DefaultGradients from '../utils/DefaultGradients';
	import GradientBox from './GradientBox.svelte';

	let {
		myState,
		name = undefined,
		noMarginTop = false,
		noMarginBottom = false,
		noLabel = false
	}: {
		myState: State | undefined | null;
		name?: string | undefined;
		noMarginTop?: boolean;
		noMarginBottom?: boolean;
		noLabel?: boolean;
	} = $props();

	let innerWidth: number = $state(0);

	const getPaddings = (ignoreSecondLine: boolean = false) => {
		let paddingX = 10;
		let paddingY = 10;
		if (innerWidth < 800) {
			paddingX = 5;
		}
		if (myState && myState.getSecondLine() && !ignoreSecondLine) {
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
		if (myState && myState.getFontSize()) {
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
	{:else if !noLabel}
		<GradientBox
			style={getLabelStyle()}
			gradient={DefaultGradients.TRANSPARENT}
			{noMarginTop}
			{noMarginBottom}
		></GradientBox>
	{/if}
	{#if myState}
		<GradientBox
			style={getStyle()}
			gradient={myState.getGradient()}
			lineTwo={myState.getSecondLine()}
			{noMarginTop}
			{noMarginBottom}>{myState.getValue()}</GradientBox
		>
	{:else}
		<p class="null-placeholder">-</p>
	{/if}
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
