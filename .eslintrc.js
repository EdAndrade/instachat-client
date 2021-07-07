module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': 'off',
		semi: ['error', 'always']
	}
};