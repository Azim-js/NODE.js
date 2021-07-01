const data=[{item:"Milk"},{item:"Eggs"},{item:"Bread"},{item:"Chocolate"}];

const bodyParser=require('body-parser');

const urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports=function(app){

    app.get("/todo",function(req,res){
        res.render("todo",{item:data});
    });
    app.post("/todo",urlencodedParser,function(req,res){
        console.log(req.body);
        data.push(req.body);
        // send the data in json format 
        res.json(data);
        // res.redirect("/todo");
        // res.render("todo",{item:data});
    
    });
    app.delete("/todo",function(req,res){

    });
}