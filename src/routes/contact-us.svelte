<script>
	let submitted = false;

	import contactSchema from '$lib/formValidation/contactForm';
	let errors = {};
	let values = {};

	const handleSubmit = async () => {
		try {
			await contactSchema.validate(values, { abortEarly: false });
			alert(JSON.stringify(values, null, 2));
			errors = {};
		} catch (err) {
			errors = err.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message };
			}, {});
		}
	};
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Contact now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form on:submit|preventDefault={handleSubmit}>
					<div class="form-control">
						<label class="label" for="input-bordered">
							<span class="label-text">Name</span>
						</label>
						<input type="text" class="input input-bordered" bind:value={values.name} />
						{#if errors.name}
							<span class="error">{errors.name}</span>
						{/if}
					</div>
					<div class="form-control">
						<label class="label" for="input-bordered">
							<span class="label-text">Email</span>
						</label>
						<input type="text" class="input input-bordered" bind:value={values.email} />
						{#if errors.email}
							<span class="error">{errors.email}</span>
						{/if}
					</div>
					<div class="form-control">
						<label class="label" for="input-bordered">
							<span class="label-text">Gender</span>
						</label>
						<select class="select select-bordered w-full max-w-xs" bind:value={values.gender}>
							<option value="">Select One</option>
							<option value="M">Male</option>
							<option value="F">Female</option>
						</select>
						{#if errors.gender}
							<span class="error">{errors.gender}</span>
						{/if}
					</div>
					<br />
					<label class="label" for="input-bordered">
						<span class="label-text">Radio Option</span>
					</label>
					Yes:
					<input
						type="radio"
						name="radio-1"
						value="radio1"
						class="radio"
						bind:group={values.radioOpt}
					/>
					No:
					<input
						type="radio"
						name="radio-1"
						value="radio2"
						class="radio"
						bind:group={values.radioOpt}
					/>
					<br />
					{#if errors.radioOpt}
						<span class="error">{errors.radioOpt}</span>
					{/if}
					<br />
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Remember me</span>
							<input type="checkbox" class="checkbox" bind:checked={values.rembemberMe} />
						</label>
					</div>
					{#if errors.rembemberMe}
						<span class="error">{errors.rembemberMe}</span>
					{/if}

					<div class="form-control mt-6">
						<button class="btn btn-primary" on:click={() => (submitted = true)}>Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
