

// process.stdout.write('hallow')

const {Writable}=require('stream');

class Mywriter extends Writable{

	constructor(){
		super()
	}
	_write(chunk,encoding,callBack){
		console.log(chunk.toString());
		callBack()
	}
}
	


const writer=new Mywriter();
/*writer.on('finish',()=>{
	console.log('finish....')
})

writer.write('hallow');
writer.end();*/
process.stdin.pipe(writer);