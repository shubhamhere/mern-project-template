
const jwt = require('jsonwebtoken');
const User= require("../model/userSchema")

const  Authenticate=async(req,res,next)=> {
    
    try {
        
        const token = req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})//we acess token in mongo DB from tokens.token

        if (!rootUser) {
            throw new Error('User not found')
        }
        //storing all data in req.token,req.rootUser,req.userId
        req.token = token;
        req.rootUser=rootUser;//if _id matches then all data gets stored in req.rootuser
         req.userID=rootUser._id;

         next();
    } catch (error) {
        res.status(401).send('Unauthorized:No token provided')
        console.log(error);
        
    }
   
}

module.exports= Authenticate;
