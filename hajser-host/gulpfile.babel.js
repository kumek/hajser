import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import watch from 'gulp-watch';

gulp.task('build', () => {
    return gulp.src('src/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    return gulp.watch('src/**/*', ['build']);
});
