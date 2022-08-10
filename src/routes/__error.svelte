<script context="module">
	export function load({ error }) {
		return {
			props: {
				message: error.message
			}
		};
	}
</script>

<script>
	export let message;
</script>

<div class="error">
	<h1 class="text-5xl font-bold">Oops</h1>
	<p class="text-5xl font-bold">{message}</p>
	<br />
	<a class="button" href="/">Go to Home</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
