// express intro 

const express=require('express');

// creating app(server functionalitis) 
const app=express();

// http requests
// .get(route,fn),.post(route,fn),.update(route,fn),.delete(route,fn)


app.get('/',function(req,res){
    res.send("this is homepage");
});

app.get("/contact-us",function(req,res){
    res.send("this is contact us page ");
});



app.listen(3000);