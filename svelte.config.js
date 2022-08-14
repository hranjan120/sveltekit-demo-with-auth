// import adapter from '@sveltejs/adapter-auto';
// import adapterStatic from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
// import adapterMulti from '@macfja/svelte-multi-adapter';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
