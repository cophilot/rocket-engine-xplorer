<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import HomeButton from '../../../../components/HomeButton.svelte';

	let engine1 = $page.params.engine1;
	let engine2 = $page.params.engine2;
</script>

<div class="compare">Hello from compare</div>

<HomeButton />

<style lang="scss">
	@media (max-width: 800px) {
	}
</style>
