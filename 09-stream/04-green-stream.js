#!/usr/bin/node

const Writable=require('stream').Writable,
      util=require('util');

function GreenStream(){
  Writable.call(this);
}

GreenStream.prototype._write=function(chunk,encode,cb){
  process.stdout.write('\033[1;32m'+chunk.slice(0,chunk.length-1)+'\033[1;37m');
};

util.inherits(GreenStream,Writable);

process.stdin.pipe(process.stdout);
