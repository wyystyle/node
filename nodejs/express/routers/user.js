const Router = require('express').Router;

const router = Router();

router.get("/",(req,res)=>{
	res.send('get user data');
})
router.post("/",(req,res)=>{
	// res.send('add user data');
	console.log(req.body);
})
router.put("/",(req,res)=>{
	res.send('edit user data');
})
router.delete("/",(req,res)=>{
	res.send('delete user data');
})

module.exports = router;