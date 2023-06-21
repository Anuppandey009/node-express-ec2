const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hi this is my first node express instance on AWS"})
    
})

app.listen(3000,()=>{
    console.log("My application is listening on port 3000");
})