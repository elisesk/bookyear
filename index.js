var http = require('http');

http.createServer(function (req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('I am a Node app\n');
}).listen(8080);

console.log('Server hopefully running on port 8080..');