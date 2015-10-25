var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var less = require('gulp-less');

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
});

gulp.task('output-app', ['clean-app'], function(){
	gulp.src('app/**/*.js')
		.pipe(gulp.dest('output-app'));
});

gulp.task('clean-app', function(cb){
	del(['output-app/**','!output-app']).then(function (paths) {
		cb();
	});
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.js', ['app']);
});

gulp.task('app', function(){
	gulp.src([
		'app/**/*.module.js',
		'app/**/*.js',
		])
		.pipe(gulp.dest('assets/src'))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets'))
		.pipe(uglify(
			{
				mangle: false
			}
		))
		.pipe(rename(
			{
				extname: '.min.js'
			}
		))
		.pipe(gulp.dest('assets'));
});

gulp.task('miniHtml', function(){
	  var opts = {
    conditionals: true,
    spare:true
  };
	
	gulp.src('index.html')
		.pipe(minifyHtml(opts))
		.pipe(rename(
			{
				extname: '.min.html'
			}
		))
		.pipe(gulp.dest('dist'))
});

gulp.task('miniCss', function(){
	gulp.src('assets/*.css')
		.pipe(minifyCss())
		.pipe(rename(
			{
				extname:'.min.css'
			}
		))
		.pipe(gulp.dest('dist'))
});

gulp.task('less',function(){
	gulp.src('assets/*.less')
		.pipe(less())
		.pipe(gulp.dest('less_to_css'))
		.pipe(minifyCss())
		.pipe(rename(
			{
				extname:'.min.css'
			}
		))
		.pipe(gulp.dest('less_to_css'));
});