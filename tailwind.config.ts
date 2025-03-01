import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "360px",
			// @media (min-width: 360px)
			sm: "425px",
			// @media (min-width: 425px)
			md: "768px",
			// @media (min-width: 768px)
			lg: "1024px",
			// @media (min-width: 1024px)
			xl: "1440px",
			// @media (min-width: 1440px)
		},
		extend: {
			colors: {
				brandPrimaryColor: "#2c724f",
				primaryTextColor: "#000000",
				secondaryTextColor: "#666666",
				backgroundedTextColor: "#ffffff",
				silencedTextColor: "#999999",
				signatureColor: "#777777",

				placeholderBg: "#f7f7f7",
				utilColor: "#dc3545",
			},
			backgroundImage: {
				"cta-background-image": "url('/images/brand/cta-bg.webp')",
			},
			willChange: {
				transform: "transform",
			},
			transitionDuration: {
				"1500": "1500ms",
				"2000": "2000ms",
				"3000": "3000ms",
			},
			blur: {
				xs: "2px",
			},
			fontFamily: {
				worksans: ["var(--font-work-sans)", "sans-serif"],
				script: ["var(--font-sacramento)", "cursive"],
			},
			fontSize: {
				xs: ["10px", "1.2"],
				sm: ["14px", "1.4"],
				base: ["16px", "1.6"], // 16px font size with a line height of 1.5 times the font size
				lg: ["18px", "1.7"],
				xl: ["20px", "1.8"],
			},
		},
	},
	plugins: [],
};
export default config;
