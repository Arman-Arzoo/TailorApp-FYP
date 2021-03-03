const mongoose = require("mongoose")


const adminSchema = new mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    email: {type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:5},
    role: {type:String, required:true, default:'admin',enum:['user','tailor','admin'] }


})


module.exports = Admin = mongoose.model("admin",adminSchema);