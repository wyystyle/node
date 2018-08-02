const mongoose = require('mongoose');

	const userSchema = new mongoose.Schema({
	name: {
		type:String
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
	const UserModel = mongoose.model('User',userSchema);
	module.exports=UserModel;