module.exports=function(app){

    app.get("/todo",function(req,res){
        res.send("this is todo page");
    });
    app.post("/todo",function(req,res){

    });
    app.delete("/todo",function(req,res){

    });
}