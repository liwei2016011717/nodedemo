#!/usr/bin/node

const fs=require('fs'),
      log=console.log;

const fileName=process.argv[2];
var buf=fs.readFileSync(fileName);

log('BMP file width:',buf.readUInt32LE(0x12));
log('BMP file width:',buf.readUInt32LE(0x16));
log('BMP file width:',buf.readUInt16LE(0x1c));
