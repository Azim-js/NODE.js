// express intro 

const express=require('express');

// creating app(server functionalitis) 
const app=express();

// creating a view to dislpay enginecd
app.set("view engine",'ejs');

// http requests
// .get(route,fn),.post(route,fn),.update(route,fn),.delete(route,fn)


app.get('/',function(req,res){
    // res.send("this is homepage");
    // res.sendFile(__dirname+"/index.html");

   res.render("index") ;
});

app.get("/contact-us",function(req,res){
    // res.send("this is contact us page ");
    // res.sendFile(__dirname+"/contact.html");

    res.render("contact") ;
});

// creating :id params ot :names (Requesting from url to know the id or name dynamically)

// .render method to access the ejs file

app.get("/profile/:name",function(req,res){
// res.send("the requested id is : "+req.params.id);
// res.send("the request name is :"+req.params.name);
const data={
    name:req.params.name,
    age:22,
    job:"intern",
    hobbies:["readding","playing football","valorant","coding"]
}
res.render('profile',{data:data});

});


app.listen(3000);