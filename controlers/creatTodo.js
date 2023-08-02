const Todo = require("../modules/Todo");

//mian threads block nahi hona chahiye
// function chlta rahe aur baki ka code flow block na ho
// isliye hum kabhi bhi data fetch karna ho ya Data base ke sath connection karna ho in sab ke liye
// Asynchronous(Async) function  ka use karte  he

exports.creatTodo = async (req, res) => {
  try {

 /// extract data from frontend  which is presnt in Requset ki body

 const {title, discription} = req.body;

 /// new todo object DB ke andar insert karenge 

 const response = await Todo.create({title, discription});
 res.status(200).json({

    success:true,
    data:response,
    message:"Entry Created successfully",

 });

  } 
  
  catch(err) {
    console.error(err);
    console.log(err)

    res.status(500).json({

        success:false,
        data:"internal server error",
        message:err.message,
    })


  }
};
