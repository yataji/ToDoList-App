const {
  createTD,
  deleteTD,
  editTD,
  viewTD,
  viewTDById,
} = require("../api/api");

exports.createTodo = async (req, res) => {
  await createTD(req.body);
  res.status(404).redirect("/todos");
};

exports.createTodoEjs = (req, res) => {
  res.status(200).render("add");
};

exports.deleteTodo = async (req, res) => {
  await deleteTD(req.params.id);
  res.status(302).redirect("/todos");
};

exports.editeTodo = async (req, res) => {
  await editTD(req.params.id, req.body);
  res.status(302).redirect("/todos");
};

exports.viewToDoItems = async (req, res) => {
  const { data } = await viewTD();
  res.status(200).render("index", { data });
};

exports.editeTodoEjs = async (req, res) => {
  const { data } = await viewTDById(req.params.id);
  res.status(200).render("edit", { data });
};
