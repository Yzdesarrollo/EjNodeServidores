const http = require('http');

function onServer(req, res){
    console.log("Peticion OK");

    res.writeHead(200, {"Content-Type": "text/html"});

    res.write("<h1>Server online, hi! </h1>");

    res.end();
}

const server = http.createServer(onServer);

server.listen(3000);

console.log("Server funcionando en http://localhost:3000/");