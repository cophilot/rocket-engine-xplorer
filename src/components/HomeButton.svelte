<script lang="ts">
	import { goto } from '$app/navigation';
	let {
		cls = ''
	}: {
		cls?: string;
	} = $props();
</script>

<button
	class={cls}
	onclick={() => {
		goto('/');
	}}
>
	<i class="bi bi-house"></i> Home
</button>

<style lang="scss">
</style>
