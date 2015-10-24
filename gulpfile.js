var gulp = require('gulp');

gulp.task('default', ['myTask1', 'myTask2'], function(){
	console.log('Hello Gulp');
});

gulp.task('myTask1', function(cb){
	console.log('Hello task1');
	// cb();
});

gulp.task('myTask2', function(cb){
	console.log('Hello task2');
	cb();
});

gulp.task('output1', function(){
	gulp.src('assets/vendor/bootstrap/**/*.js')
		.pipe(gulp.dest('output1'));
});

gulp.task('output2', function(){
	gulp.src('assets/vendor/bootstrap/**/*.js',
		{
			base:'assets/vendor'
		})
		.pipe(gulp.dest('output2'));
});

gulp.task('output3', function(){
	gulp.src([
		'assets/vendor/**/*.js',
		'assets/vendor/**/*.css'
	])
		.pipe(gulp.dest('output3'));
});