const gulp = require('gulp');
const sass = require('gulp-sass');
const svgstore = require('svgstore');
const cheerio = require('gulp-cheerio');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();

gulp.task('style', function () {
   gulp.src('sass/style.scss')
       .pipe(plumber())
       .pipe(sass())
       .pipe(postcss([
           autoprefixer()
       ]))
       .pipe(gulp.dest('css'))
       .pipe(server.stream());
});

gulp.task('sprite', function () {
    return gulp.src('img/*.svg')
        .pipe(svgstore({
            inlineSvg: true
        }))

        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('img'));
});


gulp.task('serve', ['style'], function () {
    server.init({
        server: '.'
    });

    gulp.watch('sass/**/*.scss', ['style']);
    gulp.watch('*.html')
        .on('change', server.reload);
});

