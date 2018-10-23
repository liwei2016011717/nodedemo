#!/usr/bin/node

const fs=require('fs'),
      src=process.argv[2];

var lnk=process.argv[3];

fs.symlinkSync(src,lnk);



