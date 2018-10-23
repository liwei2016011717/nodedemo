#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;


var dd=fs.createReadStream(file);

dd.pipe(process.stdout);
/*
  src.on('error',(err)=>{
  console.error(err.message);
  process.exit(1);
});
*/
/*src.on('open',function(){
  this.pipe(process.stdout);
})*/

process.on('uncaughtException',(err)=>{
  console.error(err.message);
  process.exit(1);
});
