const fs = require('fs');
const uuidv1 = require('uuid/v1');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const url = 'mongodb://localhost:27017';
const dbName = 'wish';

let getRandom = (min,max)=> {   
    return Math.round(min + (max-min)*Math.random());

}
let getDb=(callback)=>{
    MongoClient.connect(url,{useNewUrlParser: true},function(err, client){
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    callback(db,client);
 }
}

  
const colorArr = ['#f10','#ff0','#ff5600','#0f1'];

let add = (options,callback)=>{
    const col = db.collection('user');
    options._id = uuidv1();
    options.color = colorArr[getRandom(0,colorArr.length-1)];

    getDb(function(db,client){
       
        col.insertMany({options._id,options.color},function(err,result){
            if(!err){
                callback(null,result);
            }else{
                callback(err);
            }

            client.close()
        })

    })
}

let get = (callback)=>{
    const col = db.collection('user');
    getDb(function(options){


        col.find({options._id},function(err,docs){
            if(!err){
                callback(null,docs)
            }else{
                callback(err);
            }
            client.close()
        })


    })
}

let remove = (_id,callback)=>{
    const col = db.collection('user');
    getDb(function(db,client){
        col.updateOne({},function(err,result){
        if(!err){
            callback(null)
        }else{
            callback(err)
        }
            client.close();
        })
    })
}

module.exports = {
    get:get,
    add:add,
    remove:remove
}