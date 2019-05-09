var fs = require('fs');
var buf = fs.readFile(process.argv[2], 'utf8', callback);

function callback(err, data){
	var number = data.split('\n').length -1;
	console.log(number);
}
