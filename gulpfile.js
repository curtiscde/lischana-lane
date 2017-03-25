var gulp = require("gulp");
var less = require("gulp-less");
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var ghPages = require('gulp-gh-pages');
var bump = require('gulp-bump');
var browserSync = require('browser-sync').create();
var injectVersion = require('gulp-inject-version');

var stylePath = "app/style/**/*.less";
var lessTask = "less";

gulp.task(lessTask, function(){
  return gulp.src(stylePath)
    .pipe(less())
    .pipe(gulp.dest('app/style'))
});

gulp.task('less-watch', function(){
  gulp.watch(stylePath, [lessTask]);
});

gulp.task("copy-npm-files", function () {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                    './node_modules/headroom.js/dist/headroom.min.js'])
        .pipe(gulp.dest('./app/npm/'))
});

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

gulp.task('build', function(){
  runSequence('build-clean', 'build-files');
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

// Basic usage:
// Will patch the version
gulp.task('bump', function(){
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});
