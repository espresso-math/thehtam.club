'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var input_dir = './themes/paperback/static/scss';
var output_dir = './themes/paperback/static/css';
var exec = require('child_process').exec;

gulp.task('sass', function () {
	return gulp.src(input_dir + '/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(output_dir));
});

gulp.task('sass:watch', function () {
	gulp.watch(input_dir + '/**/*.scss', ['sass']);
});

gulp.task('hugo', function () {
	// build hugo
	exec('hugo', function (err) {
		if (err) console.log(err); // print error
	});
});

gulp.task('hugoserver', function () {
	// serve hugo with drafts
	exec('hugo server -D', function (err) {
		if (err) console.log(err);
	});
});

gulp.task('default', ['sass', 'hugoserver']);
