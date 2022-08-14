<script context="module">
	export async function load({ fetch, params }) {
		// await new Promise((resolve) => setTimeout(resolve, 5000));
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					postDetail: data
				}
			};
		}
		// return {
		// 	status: res.status,
		// 	error: new Error('Could not fetch the Post')
		// };
		return {
			status: 301,
			redirect: '/blog'
		};
	}
</script>

<script>
	export let postDetail;
</script>

<svelte:head>
	<title>{postDetail.title}</title>
</svelte:head>
{#if postDetail}
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src="https://placeimg.com/260/400/arch"
				class="max-w-sm rounded-lg shadow-2xl"
				alt="Img"
			/>
			<div>
				<h1 class="text-4xl font-bold">{postDetail.title}</h1>
				<p class="py-6">{postDetail.body}</p>
			</div>
		</div>
	</div>
{/if}
