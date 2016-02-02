var path = require('path');

module.exports = {
	entry: './client/js/game/Main.ts',
	output: {
		filename: 'bundle.js',
		path: 'client-build/js/game'
	},
	devtool: 'inline-source-map',
	resolve: {
		root: path.join(__dirname, "client/js/game"),
		// Add `.ts` and `.tsx` as a resolvable extension.
		//extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
		extensions: ['', '.js', '.ts', '.tsx']
	},
	module: {
		loaders: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.ts$/, loader: 'babel-loader!ts-loader' },
			{ test: /\.json$/, loader: 'json'}
			//{ test: /\.js$/, loader: 'babel-loader' }
		]
	},
	ts: {
		configFileName: "./client/client-tsconfig.json"
	}
};