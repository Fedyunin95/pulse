'use_strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprites'),
                svgmin = require('gulp-svgmin'),
                cheerio = require('gulp-cheerio'),
                replace = require('gulp-replace');
const connectPHP   = require('gulp-connect-php');


/**
 *  Browser-Sync
 */

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy:'127.0.0.1',
        port: 8080
    });
});

/**
 * Reload page
 */
gulp.task('browser-reload', function () {
  browserSync.reload();
});

gulp.task('php', function(){
    connectPHP.server({
        base: './',
        keepalive: true,
        hostname: 'localhost',
        port: 8080,
        open: false
    });
});

gulp.task('svg', function () {
	// return gulp.src('img/*.svg')
 //    //CreateSprite
	// .pipe(svgSprtie({
 //     mode: "symbols",
	// 	selector: "icon-%f",
	// 	svg: {
	// 		symbols: 'symbol_sprite.html'
	// 	},
	// 	svgPath: "%f",
 //        preview: false,
	// 	common: "ic"
	// }))
	// .pipe(gulp.dest("build/img"));
    return gulp.src('img/*.svg')
        // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[width]').removeAttr('width');
                $('[height]').removeAttr('height');
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
                mode: "symbols",
                preview: false,
                selector: "icon-%f",
                svg: {
                    symbols: 'symbol_sprite.svg'
                }
            }
        ))
        .pipe(gulp.dest('build/img'));
})

gulp.task('sass', function() {
	console.log('update')
	return gulp.src('styles/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
                browsers: ['last 3 versions'],
                cascade: false
            }))
    .pipe(sourcemaps.write())
	.pipe(gulp.dest('build/styles'));
})
gulp.task('script', function() {
    gulp.src('script/**/*.js') //Найдем наш main файл
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest('build/script')) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('default', ['svg', 'browser-sync', 'php', 'sass','script']);
gulp.watch('styles/**/*.scss', ['sass', 'browser-reload']);
gulp.watch('./**/*.html', ['browser-reload']);