#!/usr/bin/node

console.log('start...');
var count=0;

var timer=setInterval(loop,500);
function loop(){
  console.log('I will loop forever');
  if(++count==8) clearInterval(timer);
}



/*
setTimeout(()=>{
  clearInterval(timer);
  console.log('end');
},3000);
*/
