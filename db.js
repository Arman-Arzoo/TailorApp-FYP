// const  mongodb = require('mongoose')
// const dotenv = require("dotenv");
// dotenv.config();
// const {  DB,PORT } = require("./config/index");


// mongodb.connect(a, 
//     {
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//         useCreateIndex:true,
//     },function(err,client){
//         module.exports = client.db()
//         const app = require('./server')
//         app.listen(PORT,()=>{console.log("Server Started at http://localhost:4000")});
//     })