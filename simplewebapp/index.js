const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hi , There This is a Node.JS APP");
});

app.listen(8080,()=>{
    console.log("listening on port 8080");
});