

const http = require('http');
const path = require('path');
const mime = require('./mime.json');
const url = require('url');
const fs = require('fs'); 
const querystring = require('querystring');
const WishModel = require('./WishModel.js');
const swig = require('swig');
const server = http.createServer((req,res)=>{
    let reqUrl = url.parse(req.url,true);
    let pathname = reqUrl.pathname;


	let fileName = req.url;	
   

    if(pathname === '/index.html' || pathname === ''){
        WishModel.get((err,data)=>{
            
            let html = swig.compileFile(__dirname + '/wish/index.html');
            var data = data;




                    if(!err){
                        res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                        res.end(html); 
                    }else{
                        console.log(err);
                    }
        })
   }
    // else if(pathname ==='/add'){
    //     WishModel.add((err,data)=>{
    //         let body="";
    //         if(!err){

    //             res.on('data',(chunk)=>{
    //                 body+=chunk;
    //             })
    //             let obj = querystring.parse(data);

    //             res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    //             res.end(obj)
    //         }else{


    //         }
    //     })

    // }else if(pathname ==='/del'){

    //     WishModel.remove(id,())



    // }
    else if(fileName.lastIndexOf('.') == -1){//文件夹
            fileName = fileName + '/index.html';

        }
 		console.log(fileName)


        let filePath = path.normalize(__dirname + '/wish/' +fileName);
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