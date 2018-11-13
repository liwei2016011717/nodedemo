#!/usr/bin/node

const http=require('http');

var items=['吃饭','睡觉'];

http.createServer((req,res)=>{
  console.log(req.method());
  switch(req.method){
    case 'GET'
      select(req,res);
      break;
    case 'POST'
      add(req,res);
      break;
    case 'PUT'
      update(req,res);
      break;
    case 'DELETE'
      remove(req,res);
      break;
    default
      res.end('OK')
  }
}).listen(8080);

function select(req,res){
  var msg=JSON.stringify(itmes);
  cosole.log(msg);
  res.statusCode=200;
  res.setHeader();
}

function 

