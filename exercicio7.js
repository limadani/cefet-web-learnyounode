var http = require('http');

var url = process.argv[2];
http.get(url, callback);

function callback(response){
	response.on('data', function(data){
		let string = data.toString().split('\n');
		for (var i = 0; i < string.length; i++) {
			console.log(string[i]);
		}
	})
}
