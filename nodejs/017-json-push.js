const fs =require('fs');

const filePath='./add.json';

//追加
let add=(id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			
			let obj=JSON.parse(data);
			obj.push({
				id:id,
				name:name
			});
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){

					callback(null,obj)
					// console.log('write success...')
				}else{
					callback(err)
					// console.log('write file error:::'.err)
				}
			})
		}else{
			callback(err)
			// console.log('read file error:::',err)
		}	
	})
}
/*add('Mark',40,(err,data)=>{
	if(!err){
		console.log(data)

	}else{
		console.log('write file error:::',err);
	}
})*/

//查询
let get=(id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){

			let obj = JSON.parse(data);
			let result = null;
			// console.log(obj)
			/*for(key in obj){
				if(obj[key]["id"]===id){
					result = obj[key];
					break;
				}
			}*/
			callback(null,result)
		}else{
			callback(err)
		}
	})
}
/*get("Tom",(err,data)=>{
	if(!err){
		console.log(data)
	}else{
		console.log('get file error:::',err)
	}
})*/
// 更新
let update=(id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			obj.some((val)=>{
				if(val["id"]==id){
					val["name"]=name;
				}
			})
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,obj)
				}else{
					callback(err)
				}
			})

		}else{
			callback(err)
		}
	})
}
/*update("Tom",22,(err,data)=>{
	if(!err){
		console.log(data)
	}else{
		console.log('update file error:::',err)
	}
})*/

//删除
let remove=(id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			let newObj = obj.filter((val)=>{
				return val["id"] != id;
 			});
 			let str = JSON.stringify(newObj);
 			fs.writeFile(filePath,str,(err)=>{
 				if(!err){
 					callback(null,newObj)
 				}else{
 					callback(err)
 				}
 			})

		}else{
			callback(err)
		}
	})
}
/*remove("Leo",(err,data)=>{
	if(!err){
		console.log(data)
	}else{
		console.log('remove file error::',err)
	}
})*/