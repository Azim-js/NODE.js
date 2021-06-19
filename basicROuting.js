const http=require('http');
const fs=require('fs');
// basic routing at particular path

const server=http.createServer(function(req,res){
    console.log("request being made from : "+req.url);
    if(req.url==='/' || req.url==='/home'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+"/index.html").pipe(res);
    }

});

server.listen(3000,'127.0.0.1');

console.log("listenong at port : 3000");