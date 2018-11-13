#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      log=console.log;

const addr='http://www.sian.com/';

function getOption(addr){
    var options=url.parse(addr);

}
function getURL(opt){
  http.get(opt,(res)=>{
    //res.pipe(process.stdout);
    if( res.statusCode > 300 && res.statusCode < 400){
      var newAddr=res.headers['location'];
      log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
      log(res.headers);
      log('');
      getURL(newAddr);
    }else{
      res.pipe(process.stdout);
    }
  });
}

getURL(addr);
