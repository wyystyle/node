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
		phone:18864672573,
		locked:false,
		// createdAt:Date.now,
		friends:["Leo","Any"]},
		(err,docs)=>{
			if(!err){
				console.log(docs)
			}else{
				console.log("insert error::",err)
			}
	})*/


	/*UserModel.findByPhone('18864672573',(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('error::',err)
		}
	})*/

/*
	BlogModel.insertMany({
		name:"5b63c55ce094e327d8cfba55",
		title:"天太热",
		content:"今天心情很不好",
	},(err,docs)=>{
			if(!err){
				console.log(docs)
			}else{
				console.log("insert error::",err)
			}
	})*/


	/*
	UserModel.findOne({title:"交电费"})
			 .populate("name")
			 .then((doc)=>{
			 	console.log(doc);
			 })*/

	BlogModel.findBlogs({title:"天太热"},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log("error::",err)
		}
	})



})