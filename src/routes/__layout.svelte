<script context="module">
	export const load = async ({ url: { pathname } }) => ({
		props: { pathname }
	});
</script>

<script>
	import PageTransition from '../components/PageTransition.svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';
	export let pathname;
</script>

<Header />
<PageTransition {pathname}>
	<slot />
</PageTransition>
