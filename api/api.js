const axios = require("axios");

const API = axios.create({
  baseURL: "http://localhost:8000/todos/",
  headers: {
    "Content-Type": "application/json",
  },
});

exports.createTD = (data) => {
  return API.post("/", data);
};

exports.editTD = (id, data) => {
  return API.put(`/${id}`, data);
};

exports.deleteTD = (id) => {
  return API.delete(`/${id}`);
};

exports.viewTD = () => {
  return API.get("/");
};

exports.viewTDById = (id) => {
  return API.get(`/${id}`);
};
