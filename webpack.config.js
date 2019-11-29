var path = require('path')
module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		port: 9000,
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.css$/, loader: 'style-loader!css-loader'
			}
		]
	}
}