const async = require("hbs/lib/async");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

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

registerSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.cpassword = undefined;
        next()
    }
})


const Register = mongoose.model("Register",registerSchema);

module.exports = Register;