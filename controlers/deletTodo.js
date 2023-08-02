const Todo = require("../modules/Todo");


exports.deletTodo = async (req, res) => {
    try {    


        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({

            sucess:true,
            message:" TODO deleted successfully"


        })


        

    }


    catch (err) {


        console.error(err);
        console.log("error Updating SINGLE todos", err);
    
        res.status(500).json({
          sucess: false,
          message: err.message,
          data: " ------- error while Updating SINGLE Todo data" }
        )
  
  


    }

}