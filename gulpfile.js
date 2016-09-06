var gulp = require('gulp');
var compass = require('gulp-compass');
var path = require('path');

gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'src/style',
            sass: 'src/style',
            image: 'src/images'
        }))
        .on('error', function(error) {
            // Would like to catch the error here
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('./temp'));

});