const webpack = require('webpack');
const path = require('path');
const inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader']
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
      //new webpack.optimize.UglifyJsPlugin()
  ]
};

if (inProduction) {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
  )
}