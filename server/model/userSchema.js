const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date : {
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            },
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


//hashing password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,12);
        this.cpassword= await bcrypt.hash(this.cpassword,12);
    }
    next();
})



//we are generating token

userSchema.methods.generateAuthToken = async function(){  //we use a method of userschema
    try {
        let tokenNew =jwt.sign({_id:this._id},process.env.SECRET_KEY);//it takes payload(must be unique ex->_id) and secret/private key [options,callback]
         this.tokens= this.tokens.concat({token:tokenNew}) //it concats(joins string) one token to the other token in the Tokens section of mongoose schema
         await this.save();
         return tokenNew;  //returning token so that we can use it in auth.js
    } catch (error) {                 //we are getting _id from mongodb || this refers to a particular user details
        console.log(error);
        
    }
}

//storing the message
 userSchema.methods.addMessage = async function(name,email,phone,message){
     try {
         this.messages= this.messages.concat({name,email,phone,message}) //key value pair is same
         await this.save();
         return this.messages;
     } catch (error) {
         console.log(error);
         
     }
 }


//collection creation


const User=mongoose.model('USER',userSchema);

module.exports = User;
