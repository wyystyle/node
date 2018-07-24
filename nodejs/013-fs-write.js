const fs=require('fs');
fs.open('./001-test.txt','w',(err,fd)=>{
	if(!err){
		fs.write(fd,'这是异步写文件',(err)=>{

			if(!err){
				console.log('write file success...')	
				fs.close(fd,(err)=>{
					if(!err){
						fs.close(fd,(err)=>{
							console.log('close file success...')
						})
					}else{
						console.log('close file error:::',err)
					}
				})
			}else{
				console.log('write file error:::',err)
			}
		})
	}else{
		console.log('open file error:::',err)
	}
})