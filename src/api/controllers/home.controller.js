const User = require("../models/users.schema");
const jwt = require("../../libs/jwt");
const { generateHash, compareHash } = require("../../libs/bcrypt");

const signUp = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const findUser = await User.find({ username: username });

    if (findUser.length) {
      return res.status(404).json({ message: "User already exists!" });
    }
    const generate = await generateHash(password);
    const user = new User({ name, username, password: generate });

    await user.save();

    res.status(201).json({ message: "User added", data: user });
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const findAdmin = await User.find({ username });

    if (!findAdmin.length) {
      return res.status(404).json({ message: "User not found please signup!" });
    }

    const compare = await compareHash(password, findAdmin[0].password);

    if (!compare) {
      return res.status(404).json({ message: "Wrong password entered!" });
    }
    const token = jwt.sign({ userId: findAdmin.id });

    res.cookie("token", token);

    res.status(201).json({ message: "Login successful", token: token });
    // res.redirect("/admin");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signUp,
  signIn,
};
