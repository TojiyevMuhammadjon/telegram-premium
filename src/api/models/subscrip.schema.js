const { Schema, model, mongoose } = require("mongoose");

const Subs = new Schema({
  channel_id: {
    type: String,
    required: true,
  },
  channel_name: {
    type: String,
    ref: "Channel",
  },
  user_id: {
    type: String,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

module.exports = model("ChannelSubs", Subs);
