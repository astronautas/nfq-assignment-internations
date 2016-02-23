"use strict";

const gulp         = require('gulp');
const babel        = require('gulp-babel');
const sass         = require('gulp-sass');
const plumber      = require('gulp-plumber');
const gutil        = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');

var paths = {
  scssPath   : 'app/assets/scss',
  cssPath    : 'app/assets/css',
  jsEs6Path  : 'app/assets/js_es6',
  jsPath     : 'app/assets/js',
  jsDistPath : 'dist/assets/js'
};

gulp.task('watch', function() {
  gulp.watch(paths.scssPath + '/**/*.scss', ['sass']);
  gulp.watch(paths.jsEs6Path + '/**/*.js', ['babel']);
});

// Tasks
gulp.task('sass', function() {
  return gulp.src(paths.scssPath + '/styles.scss')
          .pipe(plumber(function (error) {
                gutil.log(error.message);
                this.emit('end');
          }))
         .pipe(sass())
         .pipe(autoprefixer({
           browsers: ['> 1%', 'IE 7'],
           cascade: false
          }))
         .pipe(gulp.dest(paths.cssPath));
});

gulp.task('babel', () =>
    gulp.src([paths.jsEs6Path + '/**/*.js', '!app/assets/js_es6/require.js', '!app/assets/js_es6/libs/*.js'])
        .pipe(plumber(function (error) {
          gutil.log(error.message);
          this.emit('end');
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/assets/js'))
);