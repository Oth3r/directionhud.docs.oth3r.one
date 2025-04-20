// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DirectionHUD',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/icon.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/oth3r/directionhud' }],
			sidebar: [
				{
					label: "Configuration",
					autogenerate: { directory: 'configuration'}
				}
			],
		}),
	],
});
