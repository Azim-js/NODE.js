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