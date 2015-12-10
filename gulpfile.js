var gulp = require('gulp');
require('gulp-grunt')(gulp);


gulp.task('assemble',['grunt-assemble:test'], function () {

});



gulp.task('watch', function () {
    gulp.watch('lib/**/*.js', ['assemble']);
});

gulp.task('dev', ['assemble','watch']);
gulp.task('smoke-test', ['assemble']);