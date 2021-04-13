const data = require("../data.js");

const getUserList = (req,res)=>{
    res.send(data.users)
}

module.exports=getUserList