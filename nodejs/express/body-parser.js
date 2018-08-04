const express = require('express');
// const Userrouter = require('./routers/user.js')

const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

// app.use("/user",Userrouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.post('/',(req,res)=>{

console.log(req.body);

})


app.listen(3000,"127.0.0.1",()=>{

	console.log("running 127.0.0.1:3000")

})