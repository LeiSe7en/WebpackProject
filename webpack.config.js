var path = require('path')
var WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		port: 9000,
		compress: true,
		stats: {
			chuncks: false,
			assets: true,
			children: false,
			chunkModules: false,
			modules: false
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/, loader: 'style-loader!css-loader'
			}
		]
	},
	plugins:[
		new WebpackBundleAnalyzer()
	]
}