

const http = require('http');
const path = require('path');
const mime = require('./mime.json');
const url = require('url');
const fs = require('fs'); 
const server = http.createServer((req,res)=>{

	// const myURL = new url.parse(req.url,true);
	// console.log(myURL);
	// console.log(req.url)
	let fileName = req.url;
	console.log(req.url)
	

	if(fileName.lastIndexOf('.') == -1){//文件夹
            fileName = fileName + '/index.html';

        }
 		console.log(fileName)


        let filePath = path.normalize(__dirname + '/bk/' +fileName);
        console.log(filePath);
        let fileExtName = path.extname(filePath);
        fs.readFile(filePath,(err,data)=>{
            if(!err){
                let mimeType = mime[fileExtName] || 'text/plain';
                res.setHeader('Content-Type', mimeType+';charset=UTF-8');
                res.end(data);
            }else{
                res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                res.statusCode = 404;
                res.end('<h1>页面走丢了。。。。</h1>')
            }

        })

    })     
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing 127.0.0.1:3000')
})