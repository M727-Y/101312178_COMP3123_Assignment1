const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique: true
    },
    gender: { type: String,
        enum: [ "Male", "Female","Other" ]
    },
    salary:{
        type:Number,
        require:true
    }

})

module.exports = mongoose.model("employee", employeeSchema)