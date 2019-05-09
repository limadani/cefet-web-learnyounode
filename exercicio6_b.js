const fs = require('fs');
const path = require('path');

module.exports = listFiles;

function listFiles(dir, ext, callback){
	let result = [];

	let t = fs.readdir(dir, fsCallback);

	function fsCallback(err, list){
		if (err) return callback(err);
		for (var i = 0; i < list.length; i++){
		 if (path.extname(list[i]) == '.' + ext) {
		 	result.push(list[i]);
		 }
		}
		callback(null, result);	
	}
}
