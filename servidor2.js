const http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Saludo del servidor");
    res.end();
}).listen(3000, 'localhost');

console.log('Server running in http://localhost:3000');