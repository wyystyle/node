const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	let psthName=req.url;
	if(psthName === "/index.html"){
		fs.readFile('./index.html',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(data);
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end("<h1>页面出错了</h1>")
			}
		})

	}else if(psthName === "/test-css.css"){
		fs.readFile('./test-css.css',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type','text/css;charset=UTF-8');
				res.end(data);
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end("<h1>页面出错了</h1>")
			}
		})
	}else if(psthName === "/list.html"){
		fs.readFile('./list.html',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(data);
			}else{
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end("<h1>页面出错了</h1>")
			}
		})
	}else{
		res.setHeader('Content-Type','text/html;charset=UTF-8');
		res.statusCode=404;
		res.end("<h1>页面找不到了</h1>")
	}

})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing 127.0.0.1:3000')
})
