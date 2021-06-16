const http = require('http');

const fs=require('fs'); //to readthe file in the form of streams 

const streamdata=fs.createReadStream(__dirname+'/chunk.txt','utf-8'); //using 8 bit unicode to english and numericals


// creates an event with name 'data' to listen 


streamdata.on('data',function(chunck){
 console.log("the chunck received are :");
 console.log(chunck);
});