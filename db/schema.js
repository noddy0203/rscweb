const mongoose = require("mongoose")

const studentSchema =  new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    countryCode:{
       type:String,
       require:true
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    grade:{
        type:String,
        require:true
    }
})

const Student = mongoose.model("Student" , studentSchema)

module.exports = Student;