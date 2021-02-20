const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    email: {type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:5},
    phoneNumber:{type:Number,required:true,minlength:11},
    gender:{type:String,required:true},
    address:{type:String,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    zipCode:{type:Number},
    userImg:{type:String},
    userMeasurement:[{
        fullLength:{type:String},
        shoulder:{type:String},
        Chest:{type:String},
        SleeveLength:{type:String},
        WaistLength:{type:String},
        Neck:{type:String},
        Comment:{type:String}
    }]

})


module.exports = User = mongoose.model("user",userSchema);