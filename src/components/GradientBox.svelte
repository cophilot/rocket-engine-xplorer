<script lang="ts">
	import type GradientColor from '../types/display/GradientColor';

	let {
		gradient,
		cls = '',
		onClick = () => {},
		style = '',
		lineTwo = undefined,
		noMarginTop = false,
		noMarginBottom = false,
		alignTextRight = false
	}: {
		gradient: GradientColor;
		cls?: string;
		onClick?: () => void;
		style?: string;
		lineTwo?: string | undefined;
		noMarginTop?: boolean;
		noMarginBottom?: boolean;
		alignTextRight?: boolean;
	} = $props();

	const getStyle = () => {
		const direction = gradient.gradientDirection || '135deg';
		const fontColor = gradient.fontColor;
		let mar = '';
		if (noMarginTop) {
			mar += 'margin-top: 0;';
		}
		if (noMarginBottom) {
			mar += 'margin-bottom: 0;';
		}
		let grad = `linear-gradient(${direction}, ${gradient.firstColor}`;

		for (let color of [gradient.secondColor, gradient.thirdColor, gradient.fourthColor]) {
			if (color === undefined) {
				continue;
			}
			grad += `, ${color}`;
		}
		grad += ')';

		let justify = 'center';
		if (alignTextRight) {
			justify = 'end';
		}

		return `${mar};background: ${grad}; ${fontColor ? `color: ${fontColor};` : ''} justify-content: ${justify}; ${style}`;
	};
</script>

<p class={'gradient-box ' + cls} style={getStyle()} onclick={onClick}>
	<slot />
	{#if lineTwo}
		<br />
		{lineTwo}
	{/if}
</p>

<style lang="scss">
	.gradient-box {
		font-weight: bold;
		display: flex;
		align-items: center;
	}
</style>
