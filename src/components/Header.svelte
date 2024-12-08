<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<script lang="ts">
	import logo from '$lib/images/logo.png';
	import { goto } from '$app/navigation';
</script>

<header class="header glass">
	<img
		src={logo}
		alt=""
		class="logo icon"
		onclick={() => {
			goto('/');
		}}
	/>
	<nav>
		<i
			class="bi bi-house"
			onclick={() => {
				goto('/');
			}}
		></i>
		<i
			class="bi bi-info-circle"
			onclick={() => {
				goto('/about');
			}}
		></i>
		<i
			class="bi bi-layout-split"
			onclick={() => {
				goto('/compare');
			}}
		></i>
	</nav>
</header>

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: calc(100% - 40px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		i {
			cursor: pointer;
			font-size: 28px;
			margin: 10px;
		}
		.logo {
			width: 50px;
			height: 50px;
			cursor: pointer;
		}
	}
</style>
