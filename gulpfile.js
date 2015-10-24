var gulp = require('gulp');
var del = require('del');

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

gulp.task('output3', ['clean', 'myTask2'], function(){
	gulp.src([
		'assets/vendor/**/*.js',
		'assets/vendor/**/*.css'
	])
		.pipe(gulp.dest('output3'));
});

gulp.task('clean', function(cb){
	////會把bootstap一併刪除，非刪除bootstrap底下的檔案
	// del(['output2/bootstrap/**']).then(function (paths) {
	// 	console.log('Deleted files/folders:\n', paths.join('\n'));
	// });
	
	////只刪除bootstrap底下的檔案
	del(['output3/**','!output3']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
		cb();
	});
})