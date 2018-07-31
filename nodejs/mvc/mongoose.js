const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wish',{ useNewUrlParser: true });

const db = mongoose.connection;

/*db.on('error',(err)=>{
	throw error
});*/

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',()=>{
	const userSchema = new mongoose.Schema({
		name:String,
		age:Number,
		sex:String
	});
	const user = mongoose.model('user',userSchema);

	/*const users = new user({name:"Kit",age:30,sex:"male"})

	users.save((err,docs)=>{

		if(!err){
			console.log(docs)
		}else{
			console.log(err)
		}
	})*/

	user.find({age:30},(err,result)=>{
		if(!err){
			console.log(result)
		}else{
			console.log(err)
		}
	})

})