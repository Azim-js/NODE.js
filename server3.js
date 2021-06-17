const http=require('http');
const fs=require('fs');

const server=http.createServer(function(req,res){
    console.log("request is eing made from : "+req.url);
    res.writeHead(200,{'content-type':'text/html'});
    const readStreamData=fs.createReadStream(__dirname+"/index.html",'utf-8');
    readStreamData.pipe(res);

});

server.listen(3000,'127.0.0.1');