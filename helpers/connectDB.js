const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology:true
    }).then(()=>console.log("mongodb connected")).catch((e)=>console.log(e))
}

module.exports=connectDb;