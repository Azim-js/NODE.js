// module patterns  //exporting it main.js

let counter=function(arr){
    return("The array elemnets are :"+ arr.length);
}

let adder=function(a,b){
    return(`the sum of two numbers are ${a+b}`);
}

let pi=3.14;

// 1st way of exporting the variables to use are 

// module.exports.counter=counter;
// module.exports.adder=adder;
// module.exports.pi=pi;


// 2nd way of exporting using json format


module.exports={
    counter:counter,
    adder:adder,
    pi:pi
};