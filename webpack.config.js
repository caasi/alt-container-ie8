var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: [
      './src/app.jsx'
    ]
  },
  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(/*{ mangle: false }*/)
    //new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/bundle\.js/, /webpack\.config\.js/, /node_modules/]
      }
    ]
  }
};
