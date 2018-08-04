const mongoose = require('mongoose');

	const BlogSchema = new mongoose.Schema({
	name:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"users"
	},
	title:{
		type:String,
	},
	content:{
		type:String,		
	}
	});
	const BlogModel = mongoose.model('Blog',BlogSchema);


	BlogSchema.static.findBlogs=function(query={},callbck){

		BlogModel.find(query)
			     .populate("name")
			     .then((doc)=>{
			     	callbck(null,doc)
			     })
			     .catch((err)=>{
			     	callbck(err)
			     })

	}

	module.exports=BlogModel;