const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentID:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:text,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    isGraduated:{
        type:boolean,
        required:true
    }
})

const Student = mongoose.model("Student",studentSchema)

module.exports = Student