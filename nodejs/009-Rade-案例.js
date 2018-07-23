const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
	constructor(data,offsetLength){
		super();
		this.data=data;
		this.offsetlength=offsetLength;
		this.on('newListener',(eventName)=>{
			if(eventName==='data'){
				setImmidiate(()=>{
					m()
				})
				
			}
		})
		_m(){
			let nowLength=this.data.length;
			let restLength=nowLengtg-this.offsetlength;

			while(restLength>0){

				let start = nowLength - restLength;
				let end = 	
			}




		}
		

	}
}






let str=`aaaaaaaaaaaabbbbbbbbbbbbbb`;


const rs.on('data',()=>{
	console.log(chunk.toString());
})
