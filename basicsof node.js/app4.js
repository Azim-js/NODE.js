// reading and writting a file sync and async usinf fs

const fs=require('fs');

// reading and writing content of a file usinf fs.sync

let content=fs.readFileSync('readme.txt','utf8');

console.log(content);

fs.writeFileSync('writeMe.txt',content);

// reading and writting to a file using fs. async which is quiker than sync method

let mainData=fs.readFile('async.txt','utf8',function(err,data){
    console.log(data);
});

console.log("to see where this gets loaded");  //before the async method calls

fs.readFile('async.txt','utf8',function(err,data){
    // console.log(data);
    fs.writeFile('asyncWrite.txt',data,function(err,result){
        if(err){
            console.log("error: "+ err);
        }
    });
});