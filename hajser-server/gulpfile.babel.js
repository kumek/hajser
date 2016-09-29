import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('build', () => {
    return gulp.src('src/**/*')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});