var gulp = require("gulp");
var less = require("gulp-less");
var ghPages = require('gulp-gh-pages');
var bump = require('gulp-bump');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');

requireDir('./gulp-tasks');

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
