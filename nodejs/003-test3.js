// console.log(module);
/*console.log(module.exports==exports);
console.log(exports);*/

// let str='hallow';
// let obj1={"name":"Tom","age":18};
// let fn=()=>{
//    	console.log("fn...")
//    };

//    exports.obj1=obj1;
//    exports.fn=fn;
//    exports.arr=[1,2,3]


//    module.exports={
//    	str:'hallow',
//    	obj1:{"name":"Tom","age":18},
//    	fn:()=>{
//    	console.log("fn...")
//    }
// }

// console.log(process.argv[1]);


/*console.log(1);

let t=setTimeout(()=>{
	console.log(2)
},500);

console.log(3);
*/

/*console.log(1);

let t=setInterval(()=>{
	console.log(2)
},500);

console.log(3);*/

console.log(1);

let t=setImmediate(()=>{
	console.log(2)
},500);

console.log(3);