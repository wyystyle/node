
const fs = require('fs');
	
//同步写文件
// let data=fs.writeFileSync('001-test.txt','qoqoqoqoqo',{flag:'w'});

//同步读文件
/*data = fs.readFileSync('001-test.txt');
console.log(data.toString())*/

//异步写文件
fs.writeFile('001-test.txt','a165c225m518I8c143V0e1b0F5',{flag:'a'},(err)=>{
	if(!err){
		
		console.log('write file success.....')
	}else{
		console.log('write file error:::',err)
	}
})

fs.readFile('001-test.txt',(err,data)=>{
	if(!err){
		console.log('read file success...')
		console.log(data.toString())
	}else{
		console.log('read file error:::',err)
	}
})