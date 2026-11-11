// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Volta Guide',
			logo: {
				src: './public/my-logo.png',
				replacesTitle: false,
			},
			// defaultLocale: 'it',
			// locales: {
				// it: {
					// label: 'Italiano',
					// lang: 'it',
				// },
			// },
			social: [
				{ icon: 'email', label: 'Email', href: 'mailto:olimpiadiscientifiche.volta@gmail.com' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mate.volta/' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/olimpiadi-scientifiche-volta/volta.guide' },
			],
			sidebar: [
				{
					label: 'A-Side',
					items: [{ autogenerate: { directory: 'a-side' } }],
				},
				{
					label: 'B-Side',
					items: [{ autogenerate: { directory: 'b-side' } }],
				},
				{
					label: 'C-Side',
					items: [{ autogenerate: { directory: 'c-side' } }],
				},
				{
					label: 'Algobadge',
					collapsed: true,
					items: [{ autogenerate: { directory: 'algobadge' } }],
				},
				{
					label: 'DLC',
					collapsed: true,
					items: [
						{ label: 'Volta Guide', link: 'https://olivolta.netlify.app/', badge: { text: 'Old', variant: 'caution' } },
						{ label: 'OII', link: 'https://olinfo.it/', },
						{ label: 'QOJ', link: 'https://qoj.ac/', },
						{ label: 'CSES', link: 'https://cses.fi/', },
						{ label: 'Codeforces', link: 'https://codeforces.com/', },
					],
				},
			],
			customCss: [
				'katex/dist/katex.min.css'
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
