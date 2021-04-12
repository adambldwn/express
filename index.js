const express=require("express");

const app=express()

app.get("/api",(req,res)=>{
    res.send("hello")
})

const port=process.env.PORT || 5000


app.listen(port,()=>{
    console.log("server started on http://localhost:5000")
})