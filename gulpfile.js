var gulp        = require('gulp');
var sass        = require('gulp-sass');
// var watch       = require('gulp-watch');
var browserSync = require('browser-sync').create();

// sass.compiler = require('node-sass');

// task para o sass
function style(){
	// 1. where is my sass file
	return gulp.src('./sass/**/*.sass')
	// 2. passe that  file through sass compliler
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	// 3. where do i save the  compliled css
	.pipe(gulp.dest('./css'))
	// 4. stream changes to all browser
	.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./sass/**/*.sass', style);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;