const Todo = require("../modules/Todo");

exports.getTodos = async (req, res) => {
  try {
    // fetch all TODO data

    const AllTodo = await Todo.find({});

    res.status(200).json({
      sucess: true,
      data: AllTodo,
      message: "all todos fetched successfully",
    });
  } catch (err) {
    console.error(err);
    console.log("error fetching alll todos", err);

    res.status(500).json({
      sucess: false,
      message: err.message,
      data: "error while fetching All Todo data",
    });
  }
};


exports.getSingleTodoById = async (req, res) => {
    try {
      // fetch all TODO data
  
      const id = req.params.id;

      const SigleTododata = Todo.findById({_id:id});

      if(!SigleTododata) {
  res.status(404).json({
sucess:false,
message:`No Data Found For the given Id  ${id} hmbfjaf`

  });

      }
  
      res.status(200).json({
        sucess: true,
        data: SigleTododata,
        message: "ONE SINGLE todos fetched successfully",
      });
    } catch (err) {
      console.error(err);
      console.log("error fetching SINGLE todos", err);
  
      res.status(500).json({
        sucess: false,
        message: err.message,
        data: " ------- error while fetching SINGLE Todo data",
      }); 
    }
  };
  
  
  