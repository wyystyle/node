
//on=addListener

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

};

const myEmitter =  new MyEmitter;

//事件的添加传参

/*myEmitter.on('text',(arg1,arg2)=>{ //箭头函数中的this是个空对象
	console.log(this);
	console.log('text...,arg1,arg2')
})

myEmitter.emit('text',10,20);*/

//事件的移除

myEmitter.on('newListener',(eventName,callBack)=>{ //在事件监听时，即on触发时执行newListener事件
 	console.log('new...',eventName,callBack);   //传进两个参数，一个是事件名，一个是回调函数即on执行的函数
	callBack()
})

fn1=()=>{
	console.log('text1......')
}
fn2=()=>{
	console.log('text2.....')
}
myEmitter.on('text1',fn1); //监听事件
myEmitter.on('text2',fn2); //监听事件

myEmitter.removeListener('text',fn1);//移除事件	

myEmitter.emit('text'); //执行事件

console.log(myEmitter.listeners);