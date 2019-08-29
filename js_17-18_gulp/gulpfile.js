var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css');

gulp.task('scripts', function() {
  return gulp.src('./js/src/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify('script.min.js'))
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./css/src/*.css')
    .pipe(concat('mainstyle.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/dist/'));
});

gulp.task('default', ['scripts', 'minify-css']);
