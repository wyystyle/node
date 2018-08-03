const Router = require('express').Router;

const router = Router();

router.get('/abc', (req, res)=> {
  res.send("get req......");
});
router.post('/abc', (req, res)=> {
  res.send("post req......");
});
router.put('/abc', (req, res)=> {
  res.send("put req......");
});
router.delete('/abc', (req, res)=> {
  res.send("delete req......");
});

module.exports = router;