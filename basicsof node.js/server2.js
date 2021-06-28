// creating a server to read stream and write textual stream throudh server

const http=require('http');
const fs= require('fs');

const server=http.createServer(function(req,res){
    console.log("url requested from this url : "+ req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});

    // creating reading stream
    const readStreamData=fs.createReadStream(__dirname+"/chunk.txt",'utf-8');
    
    // writing stream uing pipes on when server is requested

    readStreamData.pipe(res);


});

server.listen(3000,'127.0.0.1');
console.log('hello');
