var config = require('./gulp/config')

var $ = require('jquery')

console.log('main js, asset 123 ' + config.assetsdir);

$(function() {
	$('body').on('click', function(){
		console.log('click');
		require('style!css!./assets/styles.css');
	})
})