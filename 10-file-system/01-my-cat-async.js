#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] ||__filename;



fs.readFile(file,(err,data)=>{
  if(err){
    console.error('Something wrong!');
    process.exit(1);
  }else{
    console.log(data.toString('utf8'));
  }
  
});
