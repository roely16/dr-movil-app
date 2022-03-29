module.exports = {
	transpileDependencies: [
		'vuetify'
	],
	devServer: {
		host: 'localhost'
	},
	publicPath: process.env.NODE_ENV === 'production' ? '/apps/dr-movil-app/' : '/',
	pwa: {
		workboxOptions: {
			skipWaiting: true
		}
	}
}
