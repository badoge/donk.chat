/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/routes/**/*.{svelte,js,ts}"],
	daisyui: {
		themes: ["cupcake", "sunset"],
		darkTheme: "sunset"
	},
	theme: {
		extend: {}
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
