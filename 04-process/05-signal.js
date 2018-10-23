#!/usr/bin/node

process.stdin.resume();
process.on('SIGINT',()=>{
  console.log('you have pressed Ctrl+c');
  process.exit();
});

process.on('SIGTSTP',()=>{
  console.log('you have pressed Crtl+D');
});
