
const  express = require('express');

const app = express();

require("dotenv").config(); // process object ke andar sab kuchh load karna he 


const  PORT = process.env.PORT || 5000 ;

 /// middle ware as a body parser

 app.use(express.json());

 const todoroutes = require('./routes/todo');

 app.use("/api/V1" ,todoroutes);

 app.listen(PORT,()=>{

    console.log("server started at  port n0" , PORT);
 });


 const dbconnect = require("./config/database");


 dbconnect();


 app.get("/",(req , res)=>{

    res.send('<h1> This is home page of TOdo app</h1>')

 })