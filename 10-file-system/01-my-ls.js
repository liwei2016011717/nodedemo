#!/usr/bin/node

const fs=require('fs');

var dir=process.argv[2] || __dirname;
console.log(fs.readdirSync(dir));




