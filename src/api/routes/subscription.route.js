// src/api/routes/subscription.route.js

const express = require("express");
const router = express.Router();

// Import the necessary controller functions
const {
  account,
  updateAccount,
} = require("../controllers/subscription.controller");

const isAuth = require("../middlewares/isAuth");


router.post("/account", isAuth, account);
router.put("/account", isAuth, updateAccount);

module.exports = router;
