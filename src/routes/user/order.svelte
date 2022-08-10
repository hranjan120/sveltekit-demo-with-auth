<script context="module">
	export async function load({ session }) {
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
	export let loggedIn, admin;
</script>

<svelte:head>
	<title>User</title>
</svelte:head>

<h1>Welcome to Order</h1>
<h1 class="text-3xl font-bold underline">Hello world order!</h1>
<br />
<p>loggedIn = {loggedIn}</p>
<p>admin = {admin}</p>
