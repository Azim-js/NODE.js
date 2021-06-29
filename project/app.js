const express = require('express');

const app=express();

//using MVC arcthitecture 

const controller=require("./controller/controller");



// to set view files
app.set("view engine","ejs");

// middleware to use static files
app.use(express("./public"));

// using the split code
controller(app);

app.listen(3000);
console.log("listing at port number 3000");