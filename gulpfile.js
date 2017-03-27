var gulp = require("gulp");
var less = require("gulp-less");
var ghPages = require('gulp-gh-pages');
var bump = require('gulp-bump');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');

var stylePath = "app/style/**/*.less";
var lessTask = "less";

requireDir('./gulp-tasks');

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
