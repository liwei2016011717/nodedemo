#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  //console.log(req.headers);
 console.log('host:',req.headers.host);
 console.log('User-Agent',req.headers['user-agent']);
}).listen(8080);
