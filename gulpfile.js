"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var csso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var scss = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat");
var minify = require("gulp-minify");

gulp.task("js", function () {
  return gulp.src(["src/js/*.js"])
    .pipe(concat("index.js"))
    .pipe(minify({
      ext:{
        min: ".js"
      },
      noSource: true
    }))
    .pipe(gulp.dest("docs/js/"));
});

gulp.task("images", function () {
  return gulp.src("src/img/**/*.{png,jpg,svg}")
    .pipe(imagemin())
    .pipe(gulp.dest("docs/img"));
});

gulp.task("css", function () {
  return gulp.src("src/scss/style.scss")
    .pipe(plumber())
    .pipe(scss())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(gulp.dest("docs/css"))
    .pipe(server.stream());
});

gulp.task("html", function() {
  return gulp.src("src/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("docs"))
});

gulp.task("server", function () {
  server.init({
    server: "docs/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("css"));
  gulp.watch("src/js/**/*.js", gulp.series("js", "refresh"));
  gulp.watch("src/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", gulp.series("clean", "css", "html", "js", "images"));
gulp.task("start", gulp.series("build", "server"));
