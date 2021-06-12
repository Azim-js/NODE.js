const http=require('http');

const server= http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hey CODERS !!!");
    console.log("the rquest url is :" +req.url);
})

server.listen(3000,'127.0.0.1');

console.log("hello listeining to the port at 3000");