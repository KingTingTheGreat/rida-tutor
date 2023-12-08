import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				navy: "#042651",
				shark: "#196C8E",
				aqua: "#288B98",
				gay: "#83ABA2",
				cream: "#F9DEB3",
				sunshine: "#FAAE6F",
				orance: "#F16B34",
				scarlet: "#E13A20",
			},
		},
	},
	plugins: [],
};
export default config;
