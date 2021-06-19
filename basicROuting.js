const http=require('http');
const fs=require('fs');
// basic routing at particular path

const server=http.createServer(function(req,res){
    console.log("request being made from : "+req.url);
    if(req.url==='/' || req.url==='/home'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+"/index.html").pipe(res);
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+"/contact.html").pipe(res);
    }
    else if(req.url==='/api'){
        res.writeHead(200,{'Content-Type':'application/json'});
        const myObject={
            name:'Azim',
            job:'Intern',
            age:'22'
        };
        res.end(JSON.stringify(myObject));
    }
    // if no path found serving 404 error page
    else{
        res.writeHead(404,{'content-Type':'text/html'});
        fs.createReadStream(__dirname+"/404.html").pipe(res);


    }

});

server.listen(3000,'127.0.0.1');

console.log("listening at port : 3000");