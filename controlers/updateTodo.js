const Todo = require("../modules/Todo");


exports.updateTODO = async (req, res) => {
    try {

   const {id} = req.params;

   const {title, discription} = req.body;


   const UPdateddata = await Todo.findByIdAndUpdate(
    {_id:id},
    {title, discription, updatedAt:Date.now()}

   );


   res.status(200).json({
    sucess: true,
    data: UPdateddata,
    message: "ONE SINGLE todos Updated successfully",
  });


    }

    catch(err){

        console.error(err);
      console.log("error Updating SINGLE todos", err);
  
      res.status(500).json({
        sucess: false,
        message: err.message,
        data: " ------- error while Updating SINGLE Todo data" }
      )




}

}