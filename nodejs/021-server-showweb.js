

const http = require('http');
const path = require('path');
const mime = require('./mime.json');
const url = require('url');
const fs = require('fs'); 
const server = http.createServer((req,res)=>{
	const fileName = req.url;
	if(fileName.lastIndexOf('.') == -1){

		fs.readFile(filepath,(err,date)=>{
			if(!err){
				res.setHeader('Content-type',mime[extname] + ';charset=UTF-8');
				res.end(data);
			}else{
				res.setHeader('Content-type',mime[extname] + ';charset=UTF-8');
				res.statusCode=404;
				res.end('页面走丢了');
			}
		})


	}












	
	/*if(fileName.lastIndexOf('.') == -1){

		fileName = fileName + '/index.html';
		let filepath = path.normalize(_dirname + '/bk/' + fileName);
		let extname = path.extname(filepath);
		fs.readFile(filepath,(err,date)=>{
			if(!err){
				res.setHeader('Content-type','text/html;charset=UTF-8');
				res.end(date);
			}else{
				res.setHeader('Content-type','text/html;charset=UTF-8');
				res.statusCode=404;
				res.end('页面走丢了');
			}
		})
	}*/
	
	/*if(fileName.lastIndexOf('.') == -1){
		fileName = fileName + '/index.html';
		
		let filepath=path.normalize(_dirname + '/bk/' + fileName);
		let extname = path.extname(filepath);
		console.log(filepath)
		fs.readFile(filepath,(err,date)=>{
			if(!err){
				
			}else{
				res.setHeader('Content-type',mime[extname] + ';charset=UTF-8');
				res.statusCode=404;
				res.end('页面走丢了');
			}
		})
	}*/
	// res.setHeader('Content-type','text/html;charset=UTF-8');
	// res.end('ok');
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing 127.0.0.1:3000')
})