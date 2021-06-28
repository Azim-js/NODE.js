// to create and remove directories
const fs=require('fs');

// sync method
// fs.unlinkSync('writeMe.txt');

// creating directories

// sync method

// fs.mkdirSync('stuff'); //to make dirctory

// fs.rmdirSync('stuff'); // to remove dir

// ASYNC methods to create and remove uisng callback functions 

fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf-8',function(err,data){
        fs.writeFile('./stuff/writeMe.txt',data,function(err,data){
            if(err){
                console.log('error: '+err);
            }
        });
    });
});

// ASync rmdir
// fs.unlink('./stuff/writeMe.txt',function(){
//     fs.rmdir('stuff',function(){
//         console.log('sucess');
//     });
// })
