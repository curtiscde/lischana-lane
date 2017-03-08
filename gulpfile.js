var gulp = require("gulp");
var less = require("gulp-less");
var useref = require('gulp-useref');
var ghPages = require('gulp-gh-pages');

var stylePath = "style/**/*.less";
var lessTask = "less";

gulp.task(lessTask, function(){
  return gulp.src(stylePath)
    .pipe(less())
    .pipe(gulp.dest('style'))
});

gulp.task('less-watch', function(){
  gulp.watch(stylePath, [lessTask]);
});

gulp.task("copy-npm-files", function () {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./app/npm/'))
});

gulp.task('publish', function(){
  return gulp.src('./app/**/**')
     .pipe(useref())
    // .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
