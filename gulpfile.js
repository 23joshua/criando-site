var gulp  = require('gulp');
var sass  = require('gulp-sass');
var watch = require('gulp-watch');

// task para o sass
gulp.task('sass', function(){
	return gulp.src('./sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

// task do watch
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

// task default
gulp.task('default', function(){
	
});