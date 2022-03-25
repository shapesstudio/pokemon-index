import App from './App.svelte';
import { storyblokInit, apiPlugin } from '@storyblok/svelte';

storyblokInit({
	accessToken: '<your-token>',
	// bridge: false,
	// apiOptions: {  },
	use: [apiPlugin],
	components: {
		teaser: Teaser
	}
});
