const {Readable}=require('stream');
class Rader extends Readable{
	constructor(){
		super();
		this.index=0;
	}
	_read(){

		this.index++;
		if(this.index>5){
			this.push(null);
		}else{
			let str= ''+ this.index;
			let buf = Buffer.from(str);
			this.push(buf);
		}
	}
}
const rs = new Rader();
let body= '';
rs.on('data',(chunk)=>{
	// console.log(chunk.toString())
	body+=chunk;
	// console.log(body)
});
rs.on('end',()=>{
	console.log(body);
	console.log('end...')
});
// stream.pipe()