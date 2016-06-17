var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./main.jsx', // entry point
	],
	output: {
		path: './assets/',
		publicPath: "http://localhost:8000/assets/",
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/, 
				loaders: ['jsx-loader', 'babel'],
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/, 
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url?limit=4096'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},


		]
	},
	plugins: [
		new CommonsChunkPlugin('common.js'),
		new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port: 8000,
	},

}