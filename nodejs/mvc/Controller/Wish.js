const wish = require('../Model/Wish.js');
const swig = require('swig');

class Wish{

	//显示许愿墙页面
	index(req,res,...args){



		wish.get((err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}
		});	
	}

	del(req,res,...args){
		Wish.remove(reqUrl.query.id,(err)=>{
            if(!err){
                let resultJson = JSON.stringify({
                    status:0
                });
                res.end(resultJson);                    
            }
        });
	}
	
	add(req,res,...args){
		Wish.add(obj,(err,data)=>{
	        let result = {};
	        if(!err){
	            //3.返回结果到前端
	            result = {
	                status:0,//成功
	                data:data
	            }
	        }else{
	            result = {
	                status:10,//成功
	                message:'添加失败'
	            }
	            console.log(err);
	        }
	        let resultJson = JSON.stringify(result);
	        res.end(resultJson);                
	    });
	}
}	

module.exports = new Wish();