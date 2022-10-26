import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 5174,
		host: '127.0.0.1'
	}
};

export default config;
