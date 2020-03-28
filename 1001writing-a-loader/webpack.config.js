const path = require("path");

module.exports = {
  context: __dirname,
  entry: `./example.txt`,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, "./src/loader.js"),
          options: {
            name: "Alice"
          }
        }
      }
    ]
  }
};
