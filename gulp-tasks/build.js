var gulp = require("gulp");
var clean = require('gulp-clean');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var injectVersion = require('gulp-inject-version');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var argv = require('yargs').argv;



gulp.task('build-clean', function(){
  return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build-files', function(){
  return gulp.src('./app/**/**')
     .pipe(gulpIf('*.html', useref()))
     .pipe(gulpIf('*.html', injectVersion()))
     .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-config', function() {

  var file = argv.prod ? "production" : "staging";

  console.log("Config: " + file);

  return gulp.src('config/' + file + '.js')
             .pipe(rename('config.js'))
             .pipe(gulp.dest('dist/scripts'));
});

gulp.task('build', function(){
  runSequence('build-clean', 'build-files', 'build-config');
});
