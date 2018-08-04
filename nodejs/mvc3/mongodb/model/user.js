const mongoose = require('mongoose');
// console.log(mongoose.Schema)

	const userSchema = new mongoose.Schema({
	name: {
		type:String,

	},
	age:{
		type:Number,
		default:10
	},
	sex:{
		type:String,
		enum:["male","female"]	
	},
	phone:{
		type:Number,
	},
	locked:{
		type:Boolean
	},
	createdAt:{
		type:Date,
		default:Date.now
	},
	friends:{
		type:Array
	}
	});

	userSchema.methods.findMyBlogs=function(callback){
		this.model('Blog').find({name:this._id},(err,docs)=>{
			callback(err,docs)
		})
	}
	userSchema.static.findByPhone =function(phone,callback){
		this.find({phone:phone},(err,doc)=>{
			callback(err,doc);
		})
	}


	const UserModel = mongoose.model('user',userSchema);
	module.exports = UserModel;