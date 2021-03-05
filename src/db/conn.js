const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/register",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Database is connected...");
})
.catch((e)=>{
    console.log("Database is not connected...")
})