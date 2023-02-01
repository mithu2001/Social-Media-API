const router = require('express').Router();
const User = require('../models/user')

//Register
router.post('/register',async (req,res)=>{
   let user =await req.body;
   User.create(user);
   res.send(user);
   console.log(user);
})

//Longin

module.exports = router;