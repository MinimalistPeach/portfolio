module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
			blur: {
				xs: '1.5px'
			}, 
			animation: {
				fadeIn: "fadeIn 1.5s ease-in forwards"
			},
			keyframes: {
			fadeIn: {
			  "0%": { opacity: 0 },
			  "100%": { opacity: 1 }}
			},
		}
	},
	plugins: [],
	variants: {
		animation: ["motion-safe"]
	}
};
