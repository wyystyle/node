const express = require('express');
const swig = require('swig');


const app = express();

swig.setDefaults({
  cache: false
});

app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
// app.get('/',(req,res)=>{

// 	res.render('index',{
// 		title:"百度网",
// 		content:"给的再多，不如懂我",
// 		obj:{'name':'Tom','age':18},
// 		name:'Tom',
// 		arr:['我','可','以','竖','着','写']
// 	})
// });

app.get('/lay.html',(req,res)=>{
	res.render('lay')
})	
app.get('/list.html',(req,res)=>{
	res.render('list')
})	
	

app.listen(3000,'127.0.0.1',()=>{
	console.log("server is running 127.0.0.1:3000")
})