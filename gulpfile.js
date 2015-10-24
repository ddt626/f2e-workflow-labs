var gulp = require('gulp');

gulp.task('default', ['myTask1', 'myTask2'], function(){
	console.log('Hello Gulp');
});

gulp.task('myTask1', function(cb){
	console.log('Hello task1');
	cb();
});

gulp.task('myTask2', function(){
	console.log('Hello task2');
});