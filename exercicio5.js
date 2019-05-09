const fs = require('fs');
const path = require('path');

var t = fs.readdir(process.argv[2], callback);

function callback(err, list){
	for (var i = 0; i < list.length; i++) if (path.extname(list[i]) == '.' + process.argv[3]) console.log(list[i]);	
}
