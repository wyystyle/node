

const EventEmitter=require('events');
class MyEmitter extends EventEmitter{
	constructor(data,offsetLength){
		super();
		this.data=data;
		this.offsetLength=offsetLength;
		this.on('newListener',(eventName)=>{
			if(eventName==='data'){
				setImmediate(()=>{
					this._des()
				})
				
			}
		})

	}
	_des(){
		let nowLength=this.data.length;
		let restLength=nowLength;

		while(restLength>0){
			let start = nowLength - restLength;
			let end = start + this.offsetLength;
			let tmp = this.data.slice(start,end);
			let buf = Buffer.from(tmp);
			this.emit('data',buf);
			restLength -= this.offsetLength;
		}
		this.emit('end');
	}

}


let data=`aaaaaaaaaaaaaaaaaabbbbbbbbbbbb`;
const rs=new MyEmitter(data,10);
let body='';
rs.on('data',(chunk)=>{
	body+=chunk;
	console.log(chunk.toString());

})


rs.on('end',()=>{
	console.log(body);
	console.log('end...')
})