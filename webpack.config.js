var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var utils = require('./build/utils')
module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: './'
	},
	devtool: 'none',
	resolve: {
		alias: {
			"@": path.join(__dirname, 'src')
		}
	},
	devServer: {
		port: 9000,
		compress: true,
		inline: true,
		overlay: true,
		hot: true,
		publicPath: '/',
		stats: {
			hash: true,
			modules: false
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/, loader: 'style-loader!css-loader'
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{loader: 'html-loader'}
				]
			},
			{
				test: /\.(jpeg|jpg|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name: utils.assetsPath('[path][hash].[ext]')
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new CleanWebpackPlugin()
	]
}