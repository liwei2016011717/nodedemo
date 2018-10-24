#!/usr/bin/node

const cp=require('child_process');

console.log(cp.execFileSync('./02-child.js').toString('utf8'));
