/**
 * Load tasks
 */

////fs => node.js 中的file system模組
var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function(task) {
	require('./tasks/' + task);
});