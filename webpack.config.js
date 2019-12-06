var path = require('path')
var webpack = require('webpack')
var WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
	entry: {
		app: './src/app.js'
	},
	mode: 'production',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: (chunkData) => {
      return '[chunkhash].js'
    }
		// chunkFilename: '[name].chunk.js'
	},
	devServer: {
		port: 9000,
		compress: true,
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
				test: /\.css$/, loader: 'style-loader!css-loader'
			}
		]
	},
	optimization: {
    splitChunks: {
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: 10,
        //   filename: '[hash].js',
        //   minChunks: 1,
        //   chunks: 'initial'
        // },
        axios: {
        	test: function (module) {
        		// module.context 就是每一个项目中文件夹，注意是每一个也就是每一个路径都会传入这个方法
        		// ...
        		// /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
						// /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/helpers
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/cancel
            // ...
        		return /axios/.test(module.context)
        	},
        	minChunks: 1,
        	priority: 10,
        	filename: '[hash].js',
        	chunks: 'all'
        },
        jquery: {
        	test: function (module) {
        		// module.context 就是每一个项目中文件夹，注意是每一个也就是每一个路径都会传入这个方法
        		// ...
        		// /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
						// /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/helpers
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/core
            // /Users/caolei/Documents/Nelson/MyWebpack/node_modules/axios/lib/cancel
            // ...
            console.log(/jquery/.test(module.context))
        		return /jquery/.test(module.context)
        	},
        	minChunks: 1,
        	priority: 10,
        	filename: 'jquery.[hash].js',
        	chunks: 'all'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
	plugins:[
		// new WebpackBundleAnalyzer()
	]
}