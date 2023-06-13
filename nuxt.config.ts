export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		assets: '/<rootDir>/assets',
	},
	css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
});

