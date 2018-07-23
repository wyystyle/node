let fs=require('fs');
fd=fs.openSync('./001-test.txt','a');
fs.writeSync(fd,'这是追加');
fs.closeSync(fd);