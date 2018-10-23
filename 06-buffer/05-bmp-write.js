#!/usr/bin/node

const fs=require('fs');

const width=16,
      height=16;

var pixelByteSize=width*height*4;
var totalSize=pixelByteSize+54;

var buf=new Buffer(totalSize);

buf.fill(0);

buf.write('BM');
buf
