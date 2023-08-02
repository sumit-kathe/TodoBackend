const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(

    {
       title:{

        type:String,
        required:true,
        maxLength:50,
       },
          
       discription:{

        type:String,
        required:true,
          maxLength:100,

       },
       createdAt:{
        type:Date,
        required:true,

       default: Date.now()
    
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),

    }

    }
);

module.exports = mongoose.model('Todo' , TodoSchema);

// new way of export  ("newName ", old name in module)