const mongoose = require("mongoose");

require("dotenv").config(); // process object me sab kuchh save/ staore kar deta he 

const dbconnect = () => {

  // connect jo he ek promise return karta he that s why hum ne iss par .then  and . catch  method apply kiya he

  mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connetted sucessfully");
    })
    .catch((err) => {
      console.log(" issue in database connetction");
      console.log("eroor messege" , err.message)
      process.exit(1);
    //   It can be either 0 or 1. 0 means end the process without any kind of failure and 1 means end the process with some failure.

    });
};


module.exports = dbconnect;

// way to export the module.