#!/usr/bin/node
/*
var pi=require('./02-export-var');

console.log('\npi:',pi);
console.log(module);
*/


/*
var circle=require('./02-export-function');

console.log(circle(20).diameter());
console.log(circle(20).circumference());
console.log(circle(20).area());
*/

var circle=require('./02-export-object');

console.log(circle.diameter(20));
console.log(circle.circumference(20));
console.log(circle.area(20));
