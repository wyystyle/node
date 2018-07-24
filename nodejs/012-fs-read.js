 const fs=require('fs');
 const fd=fs.openSync('001-test.txt','r');
 let buf =Buffer.alloc(100);
 fs.readSync(fd,buf,0,100,0);
 console.log(buf.toString());
 fs.closeSync(fd)
