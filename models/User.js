const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
})

module.exports = mongoose.model("user" , userSchema)