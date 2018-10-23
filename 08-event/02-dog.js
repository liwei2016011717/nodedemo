#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
const util=require('util');

function Dog(name,energy){
  var _name=name;
  var _energy=energy;
  EventEmitter.call(this);

var self=this;
var timer=global.setInterval(()=>{
  if(_energy>0){
    self.emit('bark');
    _energy--;
  }else{
    global.clearInterval(timer);
  }
},500);
this.name=()=>_name;
this.energy=()=>_energy;

}
//Dog.prototype=EventEmitter.prototype;

util.inherits(Dog,EventEmitter);

module.exports=Dog;

