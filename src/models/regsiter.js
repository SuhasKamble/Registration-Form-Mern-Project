const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    cpassword:{
        type:String,
        required:true,
        trim:true,
    },

})


const Register = mongoose.model("Register",registerSchema);

module.exports = Register;