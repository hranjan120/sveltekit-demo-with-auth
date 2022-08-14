<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					postData: data
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch the Posts')
		};
	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
	export let postData;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Blog List Page</h2>

		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			<MovieCard posts={postData} />
		</div>
	</div>
</div>
