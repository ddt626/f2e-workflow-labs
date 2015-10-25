var gulp = require('gulp');
var del = require('del');
var config = require('../config');

var $ = require('gulp-load-plugins')();

gulp.task('app', function(){
	gulp.src([
		'app/**/*.module.js',
		'app/**/*.js',
		])
		.pipe(gulp.dest(config.assetsdir + '/src'))
		.pipe($.sourcemaps.init())
			.pipe($.concat('app.js'))
			.pipe(gulp.dest(config.assetsdir + ''))
			.pipe($.uglify(config.uglifyOption))
			.pipe($.rename(
				{
					extname: '.min.js'
				}
			))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(config.assetsdir + ''));
});

gulp.task('miniHtml', function(){
	  var opts = {
    conditionals: true,
    spare:true
  };
	
	gulp.src('index.html')
		.pipe($.minifyHtml(opts))
		.pipe($.rename(
			{
				extname: '.min.html'
			}
		))
		.pipe(gulp.dest('dist'))
});

gulp.task('miniCss', function(){
	gulp.src(config.assetsdir + '/*.css')
		.pipe($.minifyCss())
		.pipe($.rename(
			{
				extname:'.min.css'
			}
		))
		.pipe(gulp.dest('dist'))
});



gulp.task('less',function(){
	gulp.src(config.assetsdir + '/*.less')
		.pipe($.less())
		.pipe(gulp.dest('less_to_css'))
		.pipe($.minifyCss())
		.pipe($.rename(
			{
				extname:'.min.css'
			}
		))
		.pipe(gulp.dest('less_to_css'));
});