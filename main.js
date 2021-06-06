//importing the variables of stuff.js

let stuff=require('./stuff');

console.log("hello");

// importing from model using "." operator

console.log(stuff.pi);

console.log(stuff.counter(['H','B','D']));

console.log(stuff.adder(stuff.pi,1));