// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightVersions from 'starlight-versions'

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
		  alias: {
			'@': new URL('./src', import.meta.url).pathname,
		  },
		},
	  },
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
					items: [
						'configuration/config',
						'configuration/module-text',
						'configuration/dimension-settings',
					]
				},
				{
					label: "Features",
					items: [
						{
							label: "HUD",
							items: [
								'features/hud/overview',
								'features/hud/modules',
							]
						}
					  ],
				},
			],
			plugins: [
				starlightVersions({
					versions: [{ slug: '1.8.0' }],
				}),
				catppuccin({
					dark: { flavor: "mocha", accent: "blue" },
					light: { flavor: "latte", accent: "blue" }
				}),
			],
		}),
	],
});
