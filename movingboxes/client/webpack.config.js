var path = require('path');

module.exports = {
	entry: './js/Main.ts',
	output: {
		filename: 'bundle.js',
		path: 'build'
	},
	devtool: 'inline-source-map',
	resolve: {
		root: path.join(__dirname, "js"),
		// Add `.ts` and `.tsx` as a resolvable extension.
		//extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
		extensions: ['', '.js', '.ts', '.tsx']
	},
	resolveLoader: {
		root: [path.join(__dirname, 'node_modules')]
	},
	module: {
		loaders: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.ts$/, loader: 'babel-loader!ts-loader' }
			//{ test: /\.js$/, loader: 'babel-loader' }
		]
	}
};