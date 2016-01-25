var path = require('path');

module.exports = {
	//entry: './js/Main2.js',
	entry: './js/Main.ts',
	output: {
		filename: 'bundle.js',
		path: 'build'
	},
	devtool: 'inline-source-map',
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
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

/*module.exports = {
	entry: './js/Main.ts',
	resolve: {
		//extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
		extensions: ['', '.ts']
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' },
			{
				test: path.join(__dirname, 'src'),
				loader: 'babel-loader'
			}
		]
	}
};*/