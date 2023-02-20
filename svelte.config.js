import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  kit: {
    adapter: adapter(),
    paths: {
      base: ""
    }
  },
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
    }),
    sveltePreprocess({
      postcss: true,
    }),
  ],
}

export default config
