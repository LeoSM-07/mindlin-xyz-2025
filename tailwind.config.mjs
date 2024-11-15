import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.serif],
			  },
		},
	},
	plugins: [],
}
