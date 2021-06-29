// express intro 

const express=require('express');

// creating app(server functionalitis) 
const app=express();

// for post request for forms
const bodyparser=require('body-parser');

const urlencoder=bodyparser({extended:false});

// creating a view to dislpay enginecd
app.set("view engine",'ejs');

// to acess the Static files

app.use('/assets',express.static('assets'));

// http requests
// .get(route,fn),.post(route,fn),.update(route,fn),.delete(route,fn)


app.get('/',function(req,res){
    // res.send("this is homepage");
    // res.sendFile(__dirname+"/index.html");

   res.render("index") ;
});

// geting the query string using req.query

app.get("/contact-us",function(req,res){
    // res.send("this is contact us page ");
    // res.sendFile(__dirname+"/contact.html");
    console.log(req.query);
    res.render("contact",{qs:req.query}) ;
});
app.post("/contact-us",urlencoder,function(req,res){
    
    console.log(req.body);
    res.render("contact-us-sucess",{data:req.body});
   
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