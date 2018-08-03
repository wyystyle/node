const mongoose = require('mongoose');

    const BlogSchema = new mongoose.Schema({
    content:{
        type:String,        
    },
    color:{
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