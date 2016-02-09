var path = require('path');

module.exports = {
	entry: './js/Main.ts',
	output: {
		filename: 'bundle.js',
		path: 'build'
	},
	devtool: 'inline-source-map',
	resolve: {
		//root: path.join(__dirname, "js"),
		root: path.join(__dirname, "node_modules"),

		// We need blank space support because some module are explicitly referenced with their extension
		// We need .js support because of external libraries.
		// We need .js.map support because WebStorm automatically compile files and
		extensions: ['', '.ts', '.js' , '.js.map']

		// Additional note
		// This is the extensions to be used on a clean distribution of the typescript-game-engine-client
		// extensions: ['','.ts', '.js'],
	},
	resolveLoader: {
		root: [path.join(__dirname, 'node_modules')]
	},
	module: {
		loaders: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.ts$/, loader: 'ts-loader' },

			// Handle externally generated sourcemaps. Not needed if compiled with a clean copy of the client engine.
			{ test: /\.js.map$/, loader: 'json-loader' }
		]
	}
};