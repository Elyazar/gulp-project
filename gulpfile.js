const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync =require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function style () {
  return gulp.src('./scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream())
}

function watch () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.default = () => (
  gulp.src('src/app.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dist'))
);