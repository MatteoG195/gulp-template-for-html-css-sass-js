/*jslint node: true */

var gulp                           = require('gulp'),
    sass                           = require('gulp-sass'),
    browserSpecificPrefixGenerator = require('gulp-autoprefixer'),
    sassSourceFileForDev           = 'dev/styles/00-main-dev/main.scss';

gulp.task('compileCSSForDev', function () {
    'use strict';

    return gulp.src(sassSourceFileForDev)
        .pipe(sass({
            outputStyle: 'expanded',
            precision: 10
        }).on('error', sass.logError))
        .pipe(browserSpecificPrefixGenerator({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('temp/styles/'));
});
