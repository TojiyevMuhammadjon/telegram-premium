const cors = require("cors");
const express = require("express");
const routes = require("../api/routes");
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");

const modules = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(cookie());
  app.use(express.urlencoded({ extended: true }));
  app.use(fileUpload());

  app.use(express.static(process.cwd() + "/src/api/public"));
  app.use(express.static(process.cwd() + "/uploads"));

  app.use(routes);
};

module.exports = modules;
