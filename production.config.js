var webpack = require('webpack');

module.exports = {

  entry: './app/app.js',

  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
         presets: ['es2015', 'react']
        }
      }
    ]
  }

};
