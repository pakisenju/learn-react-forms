/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#b1dff9",
					secondary: "#ea96e9",
					accent: "#5c11fc",
					neutral: "#121c21",
					"base-100": "#e4e6e7",
					info: "#5b7bdc",
					success: "#24ae7b",
					warning: "#a26511",
					error: "#f31b46",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
