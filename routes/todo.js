
const express= require("express");

const router = express.Router();

// import controler uski ke upar hi to map karnege routes ko 

const {creatTodo} = require("../controlers/creatTodo")
const {getTodos,getSingleTodoById} = require("../controlers/getTodos")

const {updateTODO} = require("../controlers/updateTodo")

const {deletTodo} = require("../controlers/deletTodo")




// define api rout

router.post("/creattodo", creatTodo);

router.get("/getAllTodos", getTodos);

router.get("/getSingleTodos/:id", getSingleTodoById);

router.put("/updateTodoji/:id", updateTODO);

router.delete("/deletTodokardo/:id", deletTodo);


module.exports = router;