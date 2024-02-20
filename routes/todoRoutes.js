const express = require("express");
const {
  createTodo,
  editeTodo,
  deleteTodo,
  viewToDoItems,
  editeTodoEjs,
  createTodoEjs,
} = require("../controllers/toDo");
const { middlewarXss } = require("../middlewares/xss");
const { validator } = require("../middlewares/expressValidator");
const routes = express.Router();

routes.post("/add", middlewarXss, validator, createTodo);
routes.get("/add", createTodoEjs);
routes.post("/update/:id", middlewarXss, validator, editeTodo);
routes.get("/edit/:id", editeTodoEjs);
routes.get("/delete/:id", deleteTodo);
routes.get("/", viewToDoItems);

module.exports = routes;
