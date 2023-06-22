const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hi this is my first node express instance on AWS"})
    
})

app.get("/m1",(req,res)=>{
    res.status(200).json({message:"This is my first message"})
})

app.get("/m2",(req,res)=>{
    res.status(200).json({message:"This is my second message"})
})

app.listen(3000,()=>{
    console.log("My application is listening on port 3000");
})