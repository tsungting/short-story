var gulp = require('gulp');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var livereload = require('gulp-livereload');

var ghPages = require('gulp-gh-pages');

gulp.task('server',
    serve({
        root: ['dist'],
        port: 8000
    })
);

gulp.task('reload', function () {
    gulp.src('src/**/*')
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('watch', ['dist'], function () {
    livereload.listen();
    gulp.watch(['src/**/*'], ['reload']);
});

gulp.task('dist', function(){
    gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});


gulp.task('serve', ['server', 'watch']);