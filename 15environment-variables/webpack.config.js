const path = require("path");

// module.exports = (env, argv) => {
//   // Use env.<YOUR VARIABLE> here:
//   console.log("NODE_ENV: ", env.NODE_ENV); // 'local'
//   console.log("Production: ", env.production); // true
//   console.log("progress: ", argv.progress); // true

//   return {
//     entry: "./src/index.js",
//     output: {
//       filename: "main.js",
//       path: path.resolve(__dirname, "dist")
//     }
//   };
// };

module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: "./src/index.js",
        output: {
          filename: "main.js",
          path: path.resolve(__dirname, "dist")
        }
      });
    }, 5000);
  });
};
