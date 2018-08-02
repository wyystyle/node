const mongoose = require('mongoose');
const BlogModel = require('./mongodb/model/boke.js');
const UserModel = require('./mongodb/model/user.js');
mongoose.connect('mongodb://localhost:27017/wish',{ useNewUrlParser: true });

const db = mongoose.connection;

// db.on('error',(err)=>{
// 	throw err
// });

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',()=>{

	/*UserModel.insertMany({
		name:"Tm",
		age:18,
		// sex:"demale",
		locked:false,
		// createdAt:Date.now,
		friends:["Leo","Any"]},
		(err,docs)=>{
			if(!err){
				console.log(docs)
			}else{
				console.log("insert error::",err)
			}
	})
*/
	BlogModel.insertMany({
		name:"Tom",
		title:"交电费",
		content:"今天心情很不好",
	}
		(err,docs)=>{
			if(!err){
				console.log(docs)
			}else{
				console.log("insert error::",err)
			}
	})
	
	
})