// console.log("hey i am azim");

// console.log(__dirname);
// console.log(__filename);

// setTimeout(function(){
//     console.log("5 seconds have been passed");
// },5000);

let time=0;
let timer =setInterval(function(){
    time+=3;
    console.log(time + "seconds have passed");
    if(time>21){
        clearInterval(timer);
    }
},3000);