var express =  require('express');
var app = express();

var server = app.listen(3000);
//app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

console.log("My socket server is runnig");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('new connection: ' + socket.id);
	socket.on('mouse', function(data) {
		socket.broadcast.emit('mouse', data);
		// io.socket.emit('mouse', data); //global
		console.log(data);
	});
}