<script>
	const allEngines = ["RS-25", "RS-68", "RD-180"];
</script>

<header>
	<div class="engine-overview">
		{#each allEngines as engine}
		<button>> {engine}</button>
		{/each}
	</div>
</header>

<style lang="scss">
	.engine-overview {
		display: flex;
		width: 80vw;
		flex-direction: column;
		align-items: start;
		button{
			width: 50%;
			text-align: left;
		}
	}
</style>
