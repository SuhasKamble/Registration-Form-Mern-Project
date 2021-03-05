const express = require('express');
const app = express();
require('./db/conn')
const Register = require("./models/regsiter")
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 3000;


const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")


app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partial_path)
app.use(express.static(static_path));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",async(req,res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password===cpassword){
            const newRegister = new Register({
                firstName :req.body.firstName,
                lastName :req.body.lastName,
                email :req.body.email,
                password :password,
                cpassword :cpassword,
            })

            const saveEntry = await newRegister.save()
        }
        else{
            res.send("Password do not match!");
        }
        res.render("index")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})
