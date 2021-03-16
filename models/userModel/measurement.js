const mongoose = require("mongoose")


const measurement = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    fullLength: {type:String,required:true},
    shoulder:{type:String,required:true},
    Chest:{type:String,required:true},
    SleeveLength:{type:String,required:true},
    WaistLength:{type:String,required:true},
    Neck:{type:String,required:true},
    Comment:{type:String,required:true}
  
  

})


module.exports = Measurement = mongoose.model("Measurement",measurement);