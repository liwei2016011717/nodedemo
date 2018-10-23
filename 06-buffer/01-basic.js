#!/usr/bin/node

var buf1=new Buffer(256);
buf1[0]=23;

const log=console.log;
log('buffer length',buf1.length);
log('buffer content',buf1);

for(var i=0;i<256;i++) buf1[i]=i;
log('buffer content',buf1);

var buf2=buf1.slice(250,256);
log('\nbuffer content',buf2);

buf2.fill(0);
log('buffer content',buf2);

var arr=['a',0xBA,0xDF,0X00,255,10];
var buf3=new Buffer(arr);
log('buffer content',buf3);

var buf4=new Buffer('hello world','utf8');
log('buffer content',buf4);

buf3.copy(buf4);
log('buffer content',buf4);



