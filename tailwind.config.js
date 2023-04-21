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
			buttonColor: '#204e72'
		},
		// fontFamily: {
		// 	Shree: ['Shree Devanagari 714', 'sans-serif'],
		// 	ShreeBold: ['Shree Devanagari 714 Bold', 'sans-serif'],
		// 	ShreeItalic: ['Shree Devanagari 714 Italic', 'sans-serif'],
		// 	ShreeBoldItalic: ['Shree Devanagari 714 Bold Italic', 'sans-serif'],
		// },
		extend: {}
	},
	plugins: [require('flowbite/plugin')]
};
