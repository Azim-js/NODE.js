const http = require('http');

const fs=require('fs'); //to readthe file in the form of streams 

const readStreamData=fs.createReadStream(__dirname+'/chunk.txt','utf-8'); //using 8 bit unicode to english and numericals

//reading data in chuncks and wriTTING DATA IN chuncks


const writeStreamData=fs.createWriteStream(__dirname+'/writechunk.txt','utf-8');


// creates an event with name 'data' to listen 


readStreamData.on('data',function(chunck){
 console.log("new Chunck recived :");
//  console.log(chunck);
// simul writing when reading the buffer chuncks as stream

writeStreamData.write(chunck);

});