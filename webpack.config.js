const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
module.exports = {
  entry: ["@babel/polyfill", "./src/entry/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.hbs$/,

        exclude: /node_modules/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  devServer: {
    noInfo: true,
    quiet: true,
    stats: "errors-only",
    compress: true
  },
  node: {
    fs: "empty"
  }
};
