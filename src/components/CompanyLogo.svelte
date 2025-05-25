<script lang="ts">
	import type Company from '../types/state/Company';
	import spacexLogo from '../assets/company-logo/spacex.png';
	import blueOriginLogo from '../assets/company-logo/blue-origin.png';
	import rocketLabLogo from '../assets/company-logo/rocket-lab.png';
	import fireflyAerospaceLogo from '../assets/company-logo/firefly.png';
	let {
		company,
		height = 50,
		marginLeft = 0,
		marginRight = 0,
		marginTop = 0,
		marginBottom = 0
	}: {
		company: Company | undefined;
		height?: number;
		marginLeft?: number;
		marginRight?: number;
		marginTop?: number;
		marginBottom?: number;
	} = $props();

	const getLogoImage = () => {
		if (!company) {
			return '';
		}
		switch (company.getValue().toLowerCase()) {
			case 'spacex':
				return spacexLogo;
			case 'blue origin':
				return blueOriginLogo;
			case 'rocket lab':
				return rocketLabLogo;
			case 'firefly aerospace':
				return fireflyAerospaceLogo;
			default:
				return '';
		}
	};

	const logo = getLogoImage();
</script>

{#if logo !== ''}
	<div
		class="company-logo"
		style="margin-left: {marginLeft}px; margin-right: {marginRight}px; margin-top: {marginTop}px; margin-bottom: {marginBottom}px;"
	>
		<img src={logo} alt={company?.getValue()} style="height: {height}px; width: {height}px;" />
	</div>
{:else}
	<div></div>
{/if}

<style lang="scss">
	@use '../variables.scss' as *;

	.company-logo {
		img {
			-webkit-filter: drop-shadow(2px 2px 0px $bg-color);
			filter: drop-shadow(2px 2px 0px $bg-color);
		}
	}
</style>
