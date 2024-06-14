const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required: [true,"First name is mandatory"]
    },
    lastName:{
        type:String,
        required: [true,"lastname is required"]
    },
    email:{
        type:String,
        required: [true,"Email is required"]
    },
    phone:{
        type:String,
        required: true,
    },
    uid:{
        type:String,
        required: false,
    },
    dob:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required: true,
        enum: ["ADMIN","DOCTOR","PATIENT"]
    },
    gender:{
        type:String,
        required: true,
        enum : ["Male", "Female"]
    },
    password:{  
        type:String,
        required: true,
    },
    doctorDepartment:{
        type:String,
        required: false,
    },
    docAvatar:{
        type:String,
        required: false,
    },
});
const userModel = mongoose.model("users", userSchema);
module.exports=userModel;
    