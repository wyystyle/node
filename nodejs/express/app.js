const express = require('express');
const Userrouter = require('./routers/user.js')
const app = express();

app.use(express.static('public'));
app.use("./user",Userrouter)



app.listen(3000,"127.0.0.1",()=>{

	console.log("running 127.0.0.1:3000")

})
