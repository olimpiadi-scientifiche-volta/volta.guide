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
					label: 'Act 1',
					items: [{ autogenerate: { directory: 'act-1' } }],
				},
				{
					label: 'Act 2',
					items: [{ autogenerate: { directory: 'act-2' } }],
				},
				{
					label: 'Act 3',
					items: [{ autogenerate: { directory: 'act-3' } }],
				},
				{
					label: 'Algobadge',
					collapsed: true,
					items: [{ autogenerate: { directory: 'algobadge' } }],
				},
				{
					label: 'Extra',
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
