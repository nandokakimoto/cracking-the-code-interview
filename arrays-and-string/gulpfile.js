const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('lint', () => (
  gulp.src(['1.1/*.js', '1.1/test/*.js', '!node_modules'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));

gulp.task('test', ['lint'], () =>
	gulp.src('1.1/test', {read: false})
		.pipe(mocha({reporter: 'nyan', compilers: 'js:babel-core/register'}))
);

gulp.task('default', ['test'], () => {

});
