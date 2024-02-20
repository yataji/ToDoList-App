const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 7500;
const todosRouter = require("./routes/todoRoutes");

app.set("view engine", "ejs");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todosRouter);

app.listen(port, (res, req) => {
  console.log(`App runing on port ${port}`);
});
