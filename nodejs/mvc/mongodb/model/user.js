const mongoose = require('mongoose');

	const userSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true,"请验证"],
		minlength:[2,"最少两个字符"],
		maxlength:[10,"最多两个字符"]
	},
	age:{
		type:Number,
		default:10
	},
	sex:{
		type:String,
		enum:["male","female"]	
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

	UserModel.methods.findMyBlogs=function(callback){
		this.model('Blog').find({name:this._id},(err,docs)=>{
			callback(err.docs)
		})
	}

	const UserModel = mongoose.model('User',userSchema);
	module.exports = UserModel;