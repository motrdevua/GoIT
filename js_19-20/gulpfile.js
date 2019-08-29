'use strict';

var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    watch        = require('gulp-watch'),
    sourcemaps   = require('gulp-sourcemaps');


gulp.task('scripts', function() {
    return gulp.src('./js/src/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify('script.min.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass']);
