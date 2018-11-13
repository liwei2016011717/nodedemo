#!/usr/bin/node

const http=require('http'),
      fs=require('fs'),
      log=console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  if(req.url==='/upload'&&req.method==='POST'){
    var data='';
    req.setEncoding('binary');//设置可读流的编码，确定可读任何文件
    req.on('data',(chunk)=>{
      data+=chunk;
    });
    req.on('end',()=>{
      log(data);
      var das=data.split('\r\n');
      var fileName=das[1].split(';')[2].split('=')[1];
      fileName=fileName.slice(1,fileName.length-1);
      log('file name:',fileName);
      var filedata=das[4];
      log('file data:',filedata);
      fs.writeFileSync(fileName,filedata,'binary');
    });

    //req.pipe(process.stdout);
    res.end('OK!');
  }else{
     res.statusCode=404;
     res.end('ERROR!');
  }
}).listen(8080);
