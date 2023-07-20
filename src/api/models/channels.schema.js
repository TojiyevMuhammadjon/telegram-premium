const { Schema, model, mongoose } = require("mongoose");

const Channel = new Schema({
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
  admin_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = model("Channel", Channel);
