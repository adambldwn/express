const express = require("express")
const getUserList = require("../controlers/users.js");


const data = require("../data.js");
const userRouter =express.Router()

userRouter.get("/",getUserList)

module.exports=userRouter