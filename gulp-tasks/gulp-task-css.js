let gulp = require('gulp'),
    sass = require('gulp-sass'),
    distPath = './dist';
    function swallowError (error) {
    // If you want details of the error in the console
        console.log(error.toString())

        this.emit('end')
    }

// sass compile
gulp.task('sass', function () {
    return gulp.src('./src/scss/structure.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest('./dist/css'));
});

// watch-sass
gulp.task('watch-css', function () {
    gulp.watch('./src/scss/structure.scss', ['sass']);
});