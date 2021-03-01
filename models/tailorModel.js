const mongoose = require("mongoose")


const tailorSchema = new mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    email: {type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:5},


})


module.exports = Tailor = mongoose.model("tailor",tailorSchema);