// using pipes to write stream of chuncks(buffer)

const fs= require('fs');

const readStreamData=fs.createReadStream(__dirname+"/chunk.txt",'utf-8');

const writeStreamData=fs.createWriteStream(__dirname+"/pipchunck.txt");

readStreamData.pipe(writeStreamData);