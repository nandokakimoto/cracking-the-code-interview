const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => (
  gulp.src(['lib/*.js', '!node_modules'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));

gulp.task('default', ['lint'], () => {

});
