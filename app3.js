// event module with event  emmitier 

let events=require('events');

// creating an Event

let myEmmiter=new events.EventEmitter();


// listen
myEmmiter.on('someEvent',function(mssg){
    console.log(mssg);
});

// call
myEmmiter.emit('someEvent','the Event mssg was emmitted');


// using utils module to inherit the object into

let util=require('util');

let person=function(name)
{
    this.name=name;
};

// custom events using utils

util.inherits(person,events.EventEmitter);  //creating an event

let azim=new person('azim');
let hari=new person('hari');
let ummar =new person('ummar');

let people=[hari,azim,ummar] ;

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+' said :'+mssg);
    })
})

hari.emit('speak','hi i am backend developer');
azim.emit('speak',"hello i am working on node.js");
ummar.emit('speak',"hello i am fullstack developer");