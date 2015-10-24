var gulp = require('gulp');

gulp.task('default', ['myTask1', 'myTask2'], function(){
	console.log('Hello Gulp');
});

gulp.task('myTask1', function(){
	console.log('Hello task1');
});

gulp.task('myTask2', function(){
	console.log('Hello task2');
});