const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		"editor-script": "./src/editor.js",
		"frontend-script": "./src/frontend.js",
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@wordpress/babel-preset-default"],
					},
				},
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],
	resolve: {
		extensions: [".js", ".scss"],
	},
	externals: {
		"@wordpress/blocks": ["wp", "blocks"],
		"@wordpress/block-editor": ["wp", "blockEditor"],
		"@wordpress/components": ["wp", "components"],
		"@wordpress/element": ["wp", "element"],
		"@wordpress/i18n": ["wp", "i18n"],
	},
	mode: "production",
};
