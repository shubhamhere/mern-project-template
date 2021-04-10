const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app=express();


dotenv.config({path:'./config.env'})
require('./db/conn')
require('./router/auth')
app.use(express.json())

const cookieParser = require("cookie-parser")
app.use(cookieParser());

const User =require('./model/userSchema')

app.use(require('./router/auth'))

const PORT =process.env.PORT;



app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
    
})

