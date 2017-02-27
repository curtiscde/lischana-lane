var gulp = require("gulp");
var less = require("gulp-less");

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
