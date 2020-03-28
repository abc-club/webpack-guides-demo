const path = require("path");
const FileListPlugin = require("./src/plugin");

module.exports = {
  context: __dirname,
  entry: "./entry.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [new FileListPlugin()]
};
