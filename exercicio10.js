var net = require('net');

var port = process.argv[2];
var server = net.createServer(listener);

function listener(socket){
	let date = new Date(); 
	//"YYYY-MM-DD hh:mm"
	let data = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
	socket.end(data);
}

server.listen(port);
