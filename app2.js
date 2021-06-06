function hi(){
    console.log("Hey everyBody");
}

hi();


// creating a call back function 
function callFunction(fun){
    fun();
}

var sayBye=function(){
    console.log("BYE!");

};

callFunction(sayBye);