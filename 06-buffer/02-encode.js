#!/usr/bin/node

const name=process.argv[2],
      pwd=process.argv[3];

var str=name+':'+pwd;

var buf=new Buffer(str);
console.log('Base64',buf.toString('Base64'));
