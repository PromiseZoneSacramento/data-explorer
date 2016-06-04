module.exports = {

  entry: './app/app.js',

  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },

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
