const jwt = require("../../libs/jwt");
const cookies = require("cookie-parser");

const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) return res.status(403).json({ message: "Invalid token" });

    const verify = jwt.verify(token);

    req.user = verify;

    next();
  } catch (error) {
    console.log(error.message);
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = isAuth;
