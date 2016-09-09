var gulp = require('gulp');
var compass = require('compass');

gulp.task('default', function(cb) {
    compass.compile(cb);
});