<script lang="ts">
	import type GradientColor from '../types/display/GradientColor';

	let {
		gradient,
		cls = '',
		onClick = () => {},
		style = ''
	}: {
		gradient: GradientColor;
		cls?: string;
		onClick?: () => void;
		style?: string;
	} = $props();

	const getStyle = () => {
		const direction = gradient.gradientDirection || '135deg';
		const fontColor = gradient.fontColor;
		return `background: linear-gradient(${direction}, ${gradient.firstColor}, ${gradient.secondColor}, ${gradient.secondColor}, ${gradient.thirdColor}); ${fontColor ? `color: ${fontColor};` : ''} ${style}`;
	};
</script>

<p class={'gradient-box ' + cls} style={getStyle()} onclick={onClick}>
	<slot />
</p>

<style lang="scss">
	.gradient-box {
		font-weight: bold;
	}
</style>
