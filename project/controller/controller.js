// let data=[{item:"Milk"},{item:"Eggs"},{item:"Bread"},{item:"Chocolate"}];

const mongoose=require('mongoose');

// connecting the datatabase

mongoose.connect("mongodb+srv://test:test@cluster0.kxfmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

// creating a schema - this is a buleprint 

const todoSchema=new mongoose.Schema({
    item:String
});

// create a model according the schema (name,schema)

const todo=mongoose.model('todo',todoSchema);

// adding on to the db dummy data

// let itemOne=todo({item:"Buy Flowers"}).save(function(err){
//     if(err){
//         throw err;
//     }
//     console.log("item Saved");
// })

const bodyParser=require('body-parser');

const urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports=function(app){

    // get request 

    app.get("/todo",function(req,res){
        // get data and display it {} means all 
        todo.find({},function(err,data){
            if(err){
                throw err;
            }
            res.render("todo",{item:data});
        });
        
    });



    // post request after submitting the form

    app.post("/todo",urlencodedParser,function(req,res){
        // get data from the view and add it to the mongodb

        let newToDo=todo(req.body).save(function(err,data){
            if(err){
                throw err;
            }
            // data.push(req.body);
            // send the data in json format 
            res.json(data);
            
    
        })

        
    
    });

    // delete request
    app.delete("/todo/:item",function(req,res){
    //    find the item and remove it form mongodb
        todo.find({item:req.params.item.replace(/\-/g,' ')}).remove(function(err,data){
            if(err){
                throw err;
            }
            res.json(data);
        });

    });
}