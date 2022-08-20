<script context="module">
	export async function load({ session }) {
		if (session.userToken) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { BASE_URL } from '$lib/env';
	import { postMethod, setJwtLocal } from '$lib/utils.js';
	import { API_URL } from '$lib/env';
	import loginSchema from '$lib/formValidation/loginForm';

	let submitted = false;
	let errors = {};
	let values = { email: 'admin1@gmail.com', password: 'admin@123' };
	let apiErrors = null;

	const handleSubmit = async () => {
		try {
			await loginSchema.validate(values, { abortEarly: false });
			const response = await postMethod(`${API_URL}index/login`, values);
			if (response.statusCode === 'OK') {
				await setJwtLocal(`${BASE_URL}userAuthssr/setCook`, response.payload.userDetail.token);
				$session.userToken = response.payload.userDetail.token;
				goto('/');
			} else {
				apiErrors = response.message;
				alert(apiErrors);
			}
			errors = {};
		} catch (err) {
			if (err.inner) {
				errors = err.inner.reduce((acc, err) => {
					return { ...acc, [err.path]: err.message };
				}, {});
			}
		}
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
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
							<span class="label-text">Email</span>
						</label>
						<input type="text" class="input input-bordered" bind:value={values.email} />
						{#if errors.email}
							<span class="error">{errors.email}</span>
						{/if}
					</div>
					<div class="form-control">
						<label class="label" for="input-bordered">
							<span class="label-text">Password</span>
						</label>
						<input type="password" class="input input-bordered" bind:value={values.password} />
						{#if errors.password}
							<span class="error">{errors.password}</span>
						{/if}
					</div>
					<br />
					<div class="form-control mt-6">
						<button class="btn btn-primary" on:click={() => (submitted = true)}>Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
