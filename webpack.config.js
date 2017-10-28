const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, loader: 'babel-loader' },
			{ test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]},
			{ test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]" }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "."),
		port: 9000
	}
}