const { Router } = require("express");
const { signUp, signIn } = require("../controllers/home.controller");

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;