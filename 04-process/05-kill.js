#!/usr/bin/node

const pid=process.argv[2],
      sig=process.argv[3];

process.kill(pid,sig);
