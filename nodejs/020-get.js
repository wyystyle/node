const http = require('http');
const url = require('url');
console.log(url);
const querystring = require('querystring');
const server = http.createServer((req,res)=>{

	const myURL = new url.parse(req.url,true);
	console.log(myURL);
	const query = myURL.query;
	console.log(query);

	res.setHeader('Content-type','text/html;charset=UTF-8');
	res.end("hallow")

});
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing 127.0.0.1')
})