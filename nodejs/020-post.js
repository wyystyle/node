const http = require('http');
const url = require('url');
const formidable = require('formidable');
const util = require('util');
const fs = require('fs');
const path = require('path'); 
// console.log(url);
const querystring = require('querystring');
const server = http.createServer((req,res)=>{



	/*let body = '';
	res.on('data',(chunk)=>{
		body += chunk;
		const myURL = new url.parse(req.url,true);
		console.log(myURL);
		const query = myURL.query;

		res.setHeader('Content-type','text/html;charset=UTF-8');
		res.end("hallow")
	});

	res.on('end',()=>{
		console.log(body);

	})*/

	
	
if(req.method.toUpperCase() === 'POST'){

	let form = new formidable.IncomingForm();
	form.uploadDir = './upload';//设置保存路径
	form.keepExtensions=true;//是否保存扩展名
    form.parse(req, function(err, fields, files) {
     	res.writeHead(200, {'content-type': 'text/plain'});


    	let oldPath = './' + files.img.path;	// 获取以前名字
    	// console.log(oldPath);
		let extname = path.extname(oldPath); // 获取文件扩展名
		let newPath = './upload/' + (new Date()).getTime() + Math.random + extname;

      fs.rename(oldPath,newPath,(err)=>{
      	if(!err){
      		res.write('received upload:\n\n');
      		res.end(util.inspect({fields: fields, files: files}));
      			}
      		})
    	});
	}
});
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing 127.0.0.1')
})