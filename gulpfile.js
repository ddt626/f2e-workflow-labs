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

// 結果
// λ gulp
// [15:14:02] Using gulpfile D:\_課程\前端工程訓練\f2e-workflow-labs\gulpfile.js
// [15:14:02] Starting 'myTask1'...
// Hello task1
// [15:14:02] Starting 'myTask2'...
// Hello task2
// [15:14:02] Finished 'myTask2' after 256 μs
