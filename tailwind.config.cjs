const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const scrollbar = require('tailwind-scrollbar');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui, scrollbar]
};

module.exports = config;
