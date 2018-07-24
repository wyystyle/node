const fs = require('fs');
fs.open('001-test.txt','r',(err,fd)=>{
	if(!err){
		let buf=Buffer.alloc(50);
		fs.read(fd,buf,0,50,0,(err)=>{
			if(!err){
				console.log(buf.toString());
				console.log('read file success....')
				fs.close(fd,(err)=>{
					if(!err){
						console.log('close file success...')
					}else{
						console.log('close file error:::',err)
					}
				})
			}else{
				console.log('read file error:::',err)
			}
		})
	}else{
		console.log('open file error:::',err)
	}
})