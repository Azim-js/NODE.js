const http = require('http');

const fs=require('fs'); //to readthe file in the form of streams 

const streamdata=fs.createReadStream(__dirname+'/chunk.txt');

// creates an event with name 'data' to listen 


streamdata.on('data',function(chunck){
 console.log("the chunck received are :");
 console.log(chunck);
});