<svelte:head>
	<title>About</title>
</svelte:head>

<h1>Welcome to About</h1>
<h1 class="text-3xl font-bold underline">Hello world!</h1>
<br />
<div class="mockup-code">
	<pre data-prefix="$"><code>npm i daisyui</code></pre>
	<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
	<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>

<br />
<label for="my-modal123" class="btn modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal123" class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<label for="my-modal123" class="btn">Yay!</label>
		</div>
	</div>
</div>

<style>
	.mockup-code {
		margin: 40px 40px 40px 10px;
	}
</style>
