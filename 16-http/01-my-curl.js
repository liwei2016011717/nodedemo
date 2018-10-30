#!/usr/bin/node

const http=require('http'),
      url=require('url');

var address=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(address,(res)=>{
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
  console.log();

  res.pipe(process.stdout);
});
