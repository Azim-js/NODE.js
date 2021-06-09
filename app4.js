// reading and writting a file sync and async usinf fs

const fs=require('fs');

// reading and writing content of a file usinf fs.sync

var content=fs.readFileSync('readme.txt','utf8');

console.log(content);

fs.writeFileSync('writeMe.txt',content);