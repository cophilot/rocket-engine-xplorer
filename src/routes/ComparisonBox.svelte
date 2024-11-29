<script>
	let engine = 'RS-25';
	let url =
		'https://upload.wikimedia.org/wikipedia/commons/b/b1/Shuttle_Main_Engine_Test_Firing.jpg';
	const setEngine = (e) => {
		engine = e.target.value;
	};
</script>

<header>
	<div class="comparison-box">
		<select on:change={setEngine}>
			<option value="RS-25">RS-25</option>
			<option value="RS-68">RS-68</option>
			<option value="RD-180">RD-180</option>
		</select>
		<h1>
			{engine}
		</h1>
		<img src={url} alt="Rocket Engine" />
	</div>
</header>

<style lang="scss">
	.comparison-box {
		display: flex;
		width: 48vw;
		flex-direction: column;
		align-items: center;
		img {
			width: auto;
			height: 300px;
		}
	}

	@media (max-width: 768px) {
		.comparison-box {
			img {
				height: 200px;
			}
		}
	}
</style>
