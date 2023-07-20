const bcrypt = require("bcrypt");

const generateHash = async (password) => {
  return await bcrypt.hash(password, 10);
};

const compareHash = async (password, hashedpass) => {
  return await bcrypt.compare(password, hashedpass);
};

module.exports = {
  generateHash,
  compareHash,
};
