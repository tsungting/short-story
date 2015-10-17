var gulp = require('gulp');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var livereload = require('gulp-livereload');

gulp.task('serve',
            serve({
                root: ['dist'],
                port: 8000
            })

);

gulp.task('reload', function(){
    gulp.src('src/**/*')
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/**/*'], ['reload']);
});


gulp.task('default', ['serve', 'watch']);