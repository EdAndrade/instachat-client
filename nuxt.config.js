const env = process.env.NODE_ENV || "dev"

require('dotenv').config({
	path: `${__dirname}/.env.${env}`
})

export default {
	
	target: 'static',
	ssr: false,

	head: {
		title: 'instachat',
		htmlAttrs: {
			lang: 'pt'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap&family=Roboto&display=swap' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	css: [
		'@/assets/style/index.scss',
		'vuesax/dist/vuesax.css',
	],

	styleResources: {
		scss: [
			'@/assets/style/_variables.scss',
		],
	},

	plugins: [
		'@/plugins/fortawesome.ts',
		'@/plugins/vuesax.ts'
	],

	components: true,

	buildModules: [
		'@nuxt/typescript-build'
	],

	modules: [
		'@nuxtjs/axios',
		"@nuxtjs/style-resources"
	],

	env: {
		SERVER_IP: process.env.SERVER_IP
	},

	axios: {
		baseURL: `http://${process.env.SERVER_IP}:8085/api/chatroom/`
	},

	build: {
	},
}