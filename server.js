
const express = require ("express");
const mongoose = require ("mongoose");
const session = require('express-session')
const MongoStore = require('connect-mongo')
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
// let sessionOptions = express.session({
//     secret:"hi i am a developer",
//     store:new MongoStore({ }),
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         maxAge:1000*60*60 *24, 
//         httpOnly:true,
//     }
// })

app.use(session({
    secret: 'arman a program developer',
    saveUninitialized: true, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/tailorFyp',
      touchAfter: 24 * 3600 // time period in seconds
    }),
    cookie:{maxAge:180*60*1000}
  }));

 // set up routes

app.use('/users',userRoute);
app.use('/tailors',tailorRoute);
app.use('/admin',adminRoute);



 
module.exports = app