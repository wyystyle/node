const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// console.log(MongoClient)

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'wish';

// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser: true},function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const col = db.collection('user');


  // col.insertMany([{content:"我想变美"},{content:"我想变胖"}],function(err,result){

  // 	if(!err){
  // 		console.log(result)
  // 	}else{
  // 		console.log(err)
  // 	}
  // 	client.close();
  

  // })

 // col.find({}).toArray(function(err,docs){

 // 	if(!err){
 // 		console.log(docs)
 // 	}else{
 // 		console.log(err)
 // 	}
 // 	client.close();
 // })

 // col.updateOne({},{},function(err,result){
 // 	if(!err){
 // 		console.log(result)
 // 	}else{
 // 		console.log(err)
 // 	}
 // 	client.close();
 // })

col.deleteOne({},function(err,result){
	if(!err){
		console.log(result)
	}else{
		console.log(err)
	}
	client.close();
}) 


});