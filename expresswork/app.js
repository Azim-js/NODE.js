// express intro 

const express=require('express');

// creating app(server functionalitis) 
const app=express();

// http requests
// .get(route,fn),.post(route,fn),.update(route,fn),.delete(route,fn)


app.get('/',function(req,res){
    // res.send("this is homepage");
    res.sendFile(__dirname+"/index.html");
});

app.get("/contact-us",function(req,res){
    res.send("this is contact us page ");
});

// creating :id params ot :names (Requesting from url to know the id or name dynamically)

app.get("/profile/:id",function(req,res){
res.send("the requested id is : "+req.params.id);
// res.send("the request name is :"+req.params.name);
});


app.listen(3000);