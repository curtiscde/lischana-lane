var gulp = require("gulp");

var less = require("gulp-less");
var browserSync = require('browser-sync').create();

var baseDir = "app";
var lessPath = baseDir + '/style/**/*.less';

gulp.task('dev-watch', function(){

  console.log("Watch for less files matching: " + lessPath);
  gulp.watch(lessPath, ['less']);

  browserSync.init({
    server: {
      baseDir: baseDir
    }
  });

  gulp.watch('app/**/*').on('change', browserSync.reload);
});

gulp.task('less', function(){
  return gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest(baseDir + '/style'))
});
