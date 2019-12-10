var path = require('path')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var utils = require('./build/utils')
var webpack = require('webpack')
var WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		app: './src/app.js',
    people: './src/people.js'
	},
	mode: 'development',
  stats: {
    modules: false,
    entrypoints: false
  },
	output: {
		path: path.join(__dirname, 'dist'),
		filename: (chunkData) => {
      return '[name].js'
    }
		// chunkFilename: '[name].chunk.js'
	},
	devServer: {
		port: 9000,
		compress: true,
		inline: true,
		overlay: true,
		hot: true,
		publicPath: '/',
		stats: {
			assets: true,
			children: false,
			chunkModules: false,
			modules: false
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
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
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtimechunk~${entrypoint.name}`
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          minChunks: 1
        },
        // styles: {
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true
        // },
      //   axios: {
      //    test: function (module) {
      //      // module.context 就是每一个项目中文件夹，注意是每一个也就是每一个路径都会传入这个方法
      //      // ...
      //      // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/helpers
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/cancel
      //       // ...
      //      return /axios/.test(module.context)
      //    },
      //    minChunks: 1,
      //    priority: 11,
      //    filename: 'vendor.[hash].js',
      //    chunks: 'all'
      //   },
      //   jquery: {
      //    test: function (module) {
      //      // module.context 就是每一个项目中文件夹，注意是每一个也就是每一个路径都会传入这个方法
      //      // ...
      //      // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/helpers
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
      //       // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/cancel
      //       // ...
      //       console.log(/jquery/.test(module.context))
      //      return /jquery/.test(module.context)
      //    },
      //    minChunks: 1,
      //    priority: 10,
      //    filename: 'jquery.[hash].js',
      //    chunks: 'all'
      //   },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: "styles/[name].css"
    }),
    // new WebpackBundleAnalyzer(),
    new HTMLWebpackPlugin({
      template: 'index.html'
    })
	]
}
