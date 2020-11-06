const HtmlWebPackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devServer: {
    hot: true,
    compress: false,
    open: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./static/index.html",
      filename: "./index.html"
    }),
    new HotModuleReplacementPlugin()
  ]
};

