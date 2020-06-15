const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('./home.htm', function(err, html){
        res.write(html);
        res.end
    });
}).listen(3000);