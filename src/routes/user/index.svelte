<script context="module">
	export async function load({ session }) {
		console.log(session);
		if (session.userToken) {
			return {
				props: {
					loggedIn: session.userToken,
					admin: session?.isAdmin || false
				}
			};
		}
		return {
			status: 301,
			redirect: '/'
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { getUserProfile } from '$lib/utils.js';
	export let loggedIn, admin;
	let userDetail = null;
	onMount(async () => {
		const response = await getUserProfile(`http://3.111.56.162:8000/index/get-profile`, loggedIn);
		if (response.statusCode === 'OK') {
			userDetail = response.payload.userProfile;
			console.log(response);
		} else {
			alert(apiErrors);
		}
	});
</script>

<svelte:head>
	<title>User</title>
</svelte:head>
<h1>Welcome to User</h1>
<h1 class="text-3xl font-bold underline">Hello world!</h1>
<br />
<p>loggedIn = {loggedIn}</p>
<p>admin = {admin}</p>

<pre>{JSON.stringify(userDetail, null, 2)}</pre>
