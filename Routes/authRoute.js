const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//Register
router.post('/register',async (req,res)=>{
  

  try{
   //Generate new password
   //convert plain text into cipher text
   const salt = await bcrypt.genSalt(10);
   const hashePassword = await bcrypt.hash(req.body.password,salt);


   //Create new User
   const newUser = new User({
      username:req.body.username,
      email:req.body.email,
      password:hashePassword
     });

    //save user and return response 
    const user = await newUser.save();
    res.status(200).json(user);
  }catch(err){
   res.status(500).json(err);
  }
})


// router.get('/register',async (req,res)=>{
//    try{
//   let data =await User.find();
//   res.send(data);
//   console.log(data);
//    }catch(err){
//       console.log(err);
//    }

// })

//Longin
router.post("/login",async (req,res)=>{
   
   try{
      const user = await User.findOne({email:req.body.email});
      !user && res.status(404).json("user not found");
      //convert cipher text into plain text
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      !validPassword && res.status(404).json("Wrong Password");

      res.status(200).json(user);

   }catch(err){
      res.status(500).json(err);
   }
   
})

module.exports = router;