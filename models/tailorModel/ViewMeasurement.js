const mongoose=require("mongoose")
// const {ObjectId}= mongoose.Schema.Types

const Viewmeasurement=new mongoose.Schema({
    customerName:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    usermeasurment:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Measurement"
    }
})

module.exports = TMeasurement = mongoose.model("TMeasurement",Viewmeasurement);