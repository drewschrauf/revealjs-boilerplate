var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    }, {
      test: /\.(eot|svg|woff|ttf)$/,
      loader: 'url-loader',
      query: { limit: '10000' }
    }]
  },
  plugins: [new HtmlWebpackPlugin(), new ExtractTextPlugin("styles.css")]
};
