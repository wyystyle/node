const http = require('http');
const server = http.createServer((req,res)=>{

	res.setHeader('Content-Type','text/html;charset=UTF-8');
	res.write('hellow,你好');
	res.end()

})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing 127.0.0.1:3000')
})
