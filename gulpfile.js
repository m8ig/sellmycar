var path        = require("path");
var gulp        = require("gulp");
var concat      = require("gulp-concat");
var sass        = require("gulp-sass");
var sourcemaps  = require("gulp-sourcemaps");
var watch       = require("gulp-watch");


// set path object
var paths = {
  config: "assets/dist/",
  scripts: {
    file: "script.js",
    ext: ["node_modules/jquery/dist/jquery.js"],
    src: ["./assets/js/schedule.js"]
  },
  styles: {
    src: "./assets/scss/style.scss",
    watch: "./assets/scss/**/*.scss"
  }
}


// dev js files task
gulp.task("js", function() {
  return gulp.src(paths.scripts.ext.concat(paths.scripts.src))
    .pipe(sourcemaps.init())
    .pipe(concat(paths.scripts.file, { sourceRoot: "../" }))
    .pipe(sourcemaps.write(".", { includeContent: false }))
    .pipe(gulp.dest(paths.config));
});


// dev sass files task
gulp.task("sass", function() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: "node_modules/bootstrap-sass/assets/stylesheets/" }).on("error", sass.logError))
    .pipe(sourcemaps.write(".", { includeContent: false }))
    .pipe(gulp.dest(paths.config));
});


// watch task
gulp.task("watch", ["dev"], function() {
  gulp.watch(paths.scripts.src, ["js"]);
  gulp.watch(paths.styles.watch, ["sass"]);
});


// dev task
gulp.task("dev", ["js", "sass"]);
