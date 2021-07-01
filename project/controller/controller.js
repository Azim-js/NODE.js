let data=[{item:"Milk"},{item:"Eggs"},{item:"Bread"},{item:"Chocolate"}];

const mongoose=require('mongoose');

// connecting the datatabase

mongoose.connect("mongodb+srv://test:test@cluster0.kxfmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

// creating a schema - this is a buleprint 

const todoSchema=new mongoose.Schema({
    item:String
});

// create a model according the schema (name,schema)

const todo=mongoose.model('todo',todoSchema);

// adding on to the db

let itemOne=todo({item:"Buy Flowers"}).save(function(err){
    if(err){
        throw err;
    }
    console.log("item Saved");
})

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
    app.delete("/todo/:item",function(req,res){
        data=data.filter(function(todo){
            // replace the click list item whit blank space
            return todo.item.replace(/ /g,'-')!== req.params.item;

        });

        res.json(data);


    });
}