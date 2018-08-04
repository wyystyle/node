const http = require('http');


 function express(){
 	let fns=[];
 	let app = function(req,res){
 		let i=0;
 		function next(){
 			let fn = fns[i++];
 			if(!fn){
 				return;
 			}
 			fn(req,res,next);
 		}
 			next();


 	}
 	app.use=function(fn){
 		fns.push(fn);
 	}
 	return app;

 }


	
const app = express();

app.use((req,res,next)=>{
	console.log('befor::a')
	next();
	console.log('after::a')
})
app.use((req,res,next)=>{
	console.log('befor::b')
	next();
	console.log('after::b')
})
app.use((req,res,next)=>{
	console.log('befor::c')
	next();
	console.log('after::c')
})

const server = http.createServer(app);

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running 127.0.0.1:3000')
})