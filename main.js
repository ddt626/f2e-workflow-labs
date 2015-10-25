var config = require('./gulp/config')

var $ = require('jquery')

console.log('main js, asset 123 ' + config.assetsdir);

$(function() {
	$('body').on('click', function(){
		console.log('click');
		require('./assets/styles.css');
		
		var imgUrl = require('./apple.jpg');
		// console.log(imgUrl);
		$('#pic').append('<img src="'+imgUrl+ '">');
	})
})