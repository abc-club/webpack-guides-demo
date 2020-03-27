var gulp = require("gulp");
var webpack = require("webpack-stream");
var config = require("./webpack.config");
gulp.task("default", function() {
  return gulp
    .src("src/index.js")
    .pipe(webpack(config))
    .pipe(gulp.dest("dist/"));
});
