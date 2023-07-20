const User = require("../models/users.schema");

const account = async (req, res) => {
  try {
    // Get the user from the request (assuming user data is available after authentication)
    // Replace this with your actual authentication method

    // Update the user's account balance
    const { balance, id } = req.body;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    user.balance += balance;

    await user.save();
    res
      .status(200)
      .json({ message: "Account balance updated with method POST." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const updateAccount = async (req, res) => {
  try {
    // Get the user from the request (assuming user data is available after authentication)
    // Replace this with your actual authentication method

    // Update the user's account balance
    const { balance, id } = req.body;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    user.balance = balance; // Set the new balance instead of incrementing it

    await user.save();
    res
      .status(200)
      .json({ message: "Account balance updated with method PUT." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  account,
  updateAccount,
};
