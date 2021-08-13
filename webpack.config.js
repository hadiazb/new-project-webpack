const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config/index');

module.exports = {
	entry: [path.resolve(__dirname, './src/client/index.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[hash].js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg|ico|mp4|webm)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 90000,
						},
					},
				],
			},
		],
	},
	devServer: {
		hot: true,
		open: true,
		port: config.client.port,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Bases Universitarias',
			template: path.resolve(__dirname, './public/index.html'),
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
		}),
	],
};
