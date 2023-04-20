/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			primaryColor: '#578e3e',
			secondaryColor: '#AACB73'
		},
		extend: {}
	},
	plugins: [require('flowbite/plugin')]
};
