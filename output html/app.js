var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(_dirname + '/index.htm');
  res.end('Hello World\n');

}).listen(1338, '127.0.0.1');
