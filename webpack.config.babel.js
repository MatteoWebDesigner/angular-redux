import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: './app.js',
	output: {		
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugin: [
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: true
			}
		})
	],
	context: path.resolve(__dirname, 'app'),
	modulesDirectories: [
		path.resolve(__dirname, 'node_modules'),
		'node_modules'
	],
	resolve: {
		root: [
			path.resolve('./app')
		]
	},
	devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		colors: true,
		publicPath: '/',
		contentBase: './app',
		compress: true,
		historyApiFallback: true,
		open: true,
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		}
	}
}