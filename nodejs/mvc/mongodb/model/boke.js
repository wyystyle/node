const mongoose = require('mongoose');

	const BlogSchema = new mongoose.Schema({
	name:{
		type:ObjectId(mongoose.Schema.Types.ObjectId),
	},
	title:{
		type:String,
	},
	content:{
		type:String,		
	}
	});
	const BlogModel = mongoose.model('Blog',BlogSchema);
	module.exports=BlogSchema;