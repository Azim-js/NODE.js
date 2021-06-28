const http=require('http');

const fs=require('fs');

const server=http.createServer(function(req,res){
    // respond head informing the browser to respond with json object 
    console.log("request made from : "+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    
    //json object
    const myObject={
        name:'Azim',
        job:'intern',
        age:'22'
    }

    // creating a respond mssg when requested 
    // making the object to string to render as respond
    res.end(JSON.stringify(myObject));

});

server.listen(3000,'127.0.0.1');
console.log("listening ate port 3000");