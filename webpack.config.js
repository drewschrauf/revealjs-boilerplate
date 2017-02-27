var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.(eot|svg|woff|ttf)$/,
      loader: 'url-loader',
      query: { limit: '10000' }
    }]
  },
  plugins: [new HtmlWebpackPlugin()]
};
