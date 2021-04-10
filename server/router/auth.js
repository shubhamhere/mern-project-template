const express = require('express');
// var cors = require('cors')
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require ("../middleware/Authenticate")
require('../db/conn')
const User = require('../model/userSchema')
// var app = express()
 
// app.use(cors())
//using promises
//  router.post('/register',(req,res)=>{

//    const {name,email,phone ,work,password,cpassword}=req.body;//object destructuring

//    if (!name || !email || !phone || !work || !password || !cpassword) {
//       return res.status(422).json({error:"plz fill all feild"})
//    }

//    User.findOne({email:email})//this connects email from userschema.js to this email from auth.js
//    .then((userExist)=>{
//       if (userExist) {
//          return res.status(422).json({error:"email already exists"})
//       }
//     const user = new User ({name,email,phone ,work,password,cpassword})//if both key and value and are same no need to write twice 
//     user.save().then(()=>{
//        res.status(201).json({message:"user registetred sucessfully"})
//     }).catch((err)=>res.status(500).json({error:"failed to register"}))

//    }).catch(err=>{console.log(err);
//    })

//  })

//registration code
router.post('/register', async (req, res) => {

   const { name, email, phone, work, password, cpassword } = req.body;//getting data by object destructuring
   
   if (!name || !email || !phone || !work || !password || !cpassword) { //user should fill all feild
      return res.status(422).json({ error: "plz fill all feild" })
   }
   
   try {
      const userExist = await User.findOne({ email: email })//this connects email from userschema.js to this email from auth.js

      if (userExist) {
         return res.status(422).json({ error: "email already exists" })
      } else if (password != cpassword) {
         return res.status(422).json({ error: "password didnt match" })
      } else {
         const user = new User({ name, email, phone, work, password, cpassword })// adding data to database || if both key and value and are same no need to write twice 
         //hashing done before save
         await user.save() //saving data in user constant 
         res.status(201).json({ message: "user registetred sucessfully" })
      }
   } catch (error) {
      console.log(error);
      
   }
})


//  router.get('/contact',(req,res)=>{
   //     res.send(`hello contact`)
   //  })
//  router.get('/signin',(req,res)=>{
   //     res.send(`hello sign in`)
   //  })
//  router.get('/signup',(req,res)=>{
   //     res.send(`hello sign up`)
   //  })

   
   //signin code
   
   router.post("/signin", async (req, res) => {
      try {
         const { email, password } = req.body;//getting email password by object destructring 
   
         if (!email || !password) {
            return res.status(400).json({ error: "plz fill the data" })
         }
         const userLogin = await User.findOne({ email: email });
         //  console.log(userLogin);
   
         if (userLogin) {
   
            const isMatch = await bcrypt.compare(password, userLogin.password)//comparing hashed password with login passwords
   
            const token = await userLogin.generateAuthToken();//calling function from userschema
   
            console.log(`the token is :- ${token}`);
   
            res.cookie("jwtoken", token, { //takes name:string and value:string(this value comes from userschema )
               expires: new Date(Date.now() + 25892000000),
               httpOnly: true  //for secure connection 
            })
   
            if (!isMatch) {
               res.status(400).json({ message: "Invalid Credentials " })//dono me invalid credential he dena hai taaki hacker ko pata na chale
            }
            else {
               res.json({ message: "user signin sucessfully" })
            }
   
         } else {
            res.status(400).json({ error: "Invalid Credentials" })//dono me invalid credential he dena hai
         }
   
      } catch (error) {
         console.log(error);
   
      }
   })

   //About us page

   router.get('/about',authenticate,(req,res)=>{
      res.send(req.rootUser); //as req.rootuser contains all data of user logged in
   });
   module.exports = router;