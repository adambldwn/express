const express=require("express");
const dotenv=require("dotenv")
dotenv.config()
const productRouter = require("./routers/productRouter.js");
const userRouter = require("./routers/userRouter.js");
const connectDb = require("./helpers/connectDB.js")
connectDb()
const app=express()
var cors = require('cors');
app.use(cors());
app.use(express.json())

app.use("/api/products",productRouter)
app.use("/api/users",userRouter)

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log("server started on http://localhost:" + port)
})