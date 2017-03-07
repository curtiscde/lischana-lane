var gulp = require("gulp");
var less = require("gulp-less");
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

gulp.task('publish', function(){
  return gulp.src(['**/**', '!dist', '!node_modules'])
    // .pipe(useref())
    // .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
