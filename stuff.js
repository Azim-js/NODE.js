// module patterns  //exporting it main.js

let counter=function(arr){
    return("The array elemnets are :"+ arr.length);
}

let adder=function(a,b){
    return(`the sum of two numbers are ${a+b}`);
}

let pi=3.14;

// first way of exporting the variables to use are 

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;
