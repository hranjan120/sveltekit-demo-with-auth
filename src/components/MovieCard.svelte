<script>
	export let posts;
</script>

{#if posts}
	{#each posts as post}
		<div class="group relative">
			<div
				class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
			>
				<img
					src="https://placeimg.com/400/225/arch"
					alt="Tee in black."
					class="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div class="mt-4 flex justify-between">
				<div>
					<h3 class="text-sm text-gray-700">
						<a sveltekit:prefetch href="/blog/{post.id}">
							<span aria-hidden="true" class="absolute inset-0" />
							{post.title}
						</a>
					</h3>
				</div>
			</div>
		</div>
	{/each}
{/if}

<style>
	.group {
		margin: 5px;
	}
</style>
