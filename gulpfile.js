/**
 * Created by Sergey on 14.06.2016.
 */

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename');

//SASS
gulp.task('sass', function(){
    return gulp.src('app/sass/default.sass')
    //return gulp.src('app/sass/**/*.sass')
    //return gulp.src('app/sass/**/*.+(scss|sass)') //
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

//
gulp.task('scripts', function(){
    return gulp.src([
        'app/libs/iquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

//css
gulp.task('css-libs', ['sass'], function(){
    return gulp.src('app/css/default.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

//browser-sync
gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

//watcher SASS
gulp.task('watch', ['browser-sync','css-libs', /*'scripts',*/ 'sass'], function(){
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});