const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var ports = [8080, 8443]

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  console.log({
        remoteAddress: request.socket.remoteAddress,
        remotePort: request.socket.remotePort,
        localAddress: request.socket.localAddress,
        localPort: request.socket.localPort,
  });
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

ports.forEach(function(port) {
  s = http.createServer(handler);
  s.listen(port);
});