const {Readable}=require('stream');
class Rader extends Readable{
	constructor(){
		super();
		this.index=0;
	}
	_rade(){

		this.index++;
		if(this.index>5){
			this.push(null);
		}else{
			this.push(this.index);
		}
	}
}
const rs = new Rader();
rs.on('data',(chunk)=>{
	console.log(chunk.toString())
});
rs.end();
stream.pipe()