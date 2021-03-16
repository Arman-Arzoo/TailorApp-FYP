
const express = require ("express");
const mongoose = require ("mongoose");
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
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

let sessionOptions = session({
    secret:"hi i am a developer",
    // store:new MongoStore({
    //     client:db
    // }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60 *24, 
        httpOnly:true,
    }
})

app.use(sessionOptions)

const { DB, PORT } = require("./config/index");



app.listen(PORT,()=>{console.log("Server Started at http://localhost:4000")});

// set up mongoose

const db = mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}
).then(
    () => { console.log("successful connected to mongodb")},
    err => { err }
  );

//session for user

 // set up routes

app.use('/users',userRoute);
app.use('/tailors',tailorRoute);
app.use('/admin',adminRoute);



 
module.exports = app