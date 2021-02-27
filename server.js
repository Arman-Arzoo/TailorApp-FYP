
const express = require ("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require('./routes/userRoute')
const tailorRoute = require('./routes/tailorRoutes')
const adminRoute = require("./routes/adminRoute")
dotenv.config();

// set up server
const app = express();
app.use(express.json());
app.use(cors());


const { DB, PORT } = require("./config");

app.listen(PORT,()=>{console.log("Server Started at http://localhost:4000")});

// set up mongoose

const URI = DB || "mongodb://127.0.0.1:27017/tailorFyp";
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}
).then(
    () => { console.log("successful connected to mongodb")},
    err => { err }
  );


 // set up routes

app.use('/users',userRoute);
app.use('/tailors',tailorRoute);
app.use('/admin',adminRoute);



 
module.exports = app