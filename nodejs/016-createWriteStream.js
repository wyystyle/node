const fs=require('fs');
const ws=fs.createWriteStream('./001-test.txt');
const rs=fs.createReadStream('./002-test.txt');

/*ws.write('aaaaa')
ws.end();*/



/*rs.on('finish',()=>{
	console.log('finishi....')
})

let body='';
rs.on('data',(chunk)=>{
	body += chunk;
	// console.log(chunk)
})

rs.on('end',()=>{
	console.log(body);
	console.log('end....')
})*/
rs.pipe(ws)