const { Schema, model } = require("mongoose");

const Register = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    balance: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "desactive",
    },
    expirationDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Users", Register);
