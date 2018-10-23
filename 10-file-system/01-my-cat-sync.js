#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;

var sc=fs.readFileSync(file);

try{
  console.log(sc.toString('utf8'));
}catch(err){
  console.error(err.message);
  process.exit(1);
}
