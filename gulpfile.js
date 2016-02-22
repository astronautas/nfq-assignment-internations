"use strict";

const gulp    = require('gulp');
const sass    = require('gulp-sass');
const babel   = require('gulp-babel');
const plumber = require('gulp-plumber');
const gutil   = require('gulp-util');

var paths = {
  scssPath   : 'app/assets/scss',
  cssPath    : 'app/assets/css',
  jsEs6Path  : 'app/assets/js_es6',
  jsPath     : 'app/assets/js',
  jsDistPath : 'dist/assets/js'
};

gulp.task('watch', function() {
  gulp.watch(paths.scssPath + '/**/*.scss', ['sass']);
});

// Tasks
gulp.task('sass', function() {
  return gulp.src(paths.scssPath + '/styles.scss')
          .pipe(plumber(function (error) {
                gutil.log(error.message);
                this.emit('end');
          }))
         .pipe(sass())
         .pipe(gulp.dest(paths.cssPath));
});

gulp.task('babel', function() {
  gulp.src(paths.jsEs6Path + '/**/*.js')
   .pipe(plumber(function (error) {
        gutil.log(error.message);
        this.emit('end');
   }))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(paths.jsPath));
});