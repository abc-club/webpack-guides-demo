const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry: "./es2015.js",
  // entry: "./commonjs.js",
  entry: "./amd.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [new HtmlWebpackPlugin()]
};
