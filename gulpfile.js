var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src([
        'assets/style/*.scss'
    ])
        .pipe(concat('style.css'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('build'));
});

gulp.task('compress', function() {
    gulp.src([
        'assets/libraries/*.js',
        'app.js',
        'assets/js/userService.js',
        'assets/js/userCtrl.js',
        'assets/js/user-list/usersListDirective.js'
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('assets/style/*.scss', ['sass']);
    gulp.watch('assets/**/*.js', ['compress']);
});

gulp.task('default', ['sass','compress','watch']);
