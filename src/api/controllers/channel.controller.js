const channelsSchema = require("../models/channels.schema");
const followersSchema = require("../models/followers.schema");
const subscripSchema = require("../models/subscrip.schema");

const createChannel = async (req, res) => {
  console.log(req.body);
  try {
    const { name, username, admin_id } = req.body;

    const findChannel = await channelsSchema.find({ username: username });

    if (findChannel.length) {
      return res.status(404).json({ message: "Username already registered" });
    }

    const channel = new channelsSchema({ name, username, admin_id });

    await channel.save();

    res
      .status(201)
      .json({ message: "Congratulation! Channel registered", data: channel });
  } catch (error) {
    console.log(error);
  }
};

const getChannels = async (req, res) => {
  const subsValue = await subscripSchema.find();

  res.status(201).json({ message: "All channels", cost: subsValue });
};
const forSubs = async (req, res) => {
  const { channel_id, user_id, month, cost } = req.body;

  const channel = await channelsSchema.findById(channel_id);
  const foundChannelValue = await subscripSchema.find({
    channel_id: channel.id,
  });
  const channeladminID = channel.admin_id;
  const channelName = channel.name;
  const values = foundChannelValue.some(
    (value) => value.month === parseInt(month) && value.cost === parseInt(cost)
  );

  if (channeladminID != user_id) {
    if (values)
      return res.status(404).json({ message: "Month already registered" });
    res.status(403).json({ message: "Not access" });
  } else {
    await subscripSchema.create({
      channel_id,
      channel_name: channelName,
      user_id,
      month: parseInt(month),
      cost: parseInt(cost),

    });

    res.status(201).json({ message: "Success", channel: channelName });
  }
};

const channelFollower = async (req, res) => {
  try {
    const { user_id, channel_id } = req.body;
    const followers = await followersSchema.find({ channel_id: channel_id });
    const channel = await channelsSchema.find({ _id: channel_id });
    const channelAdmin = channel[0].admin_id;
    if (channelAdmin == user_id) {
      res.status(200).json({ message: "Your channel followers: ", followers });
    } else {
      res.status(402).json({ message: "Not allowed for you" });
    }
  } catch (error) {
    res.status(500).json({
      message: "incorrect user_id or channel_id",
      error: error.message,
    });
  }
};

module.exports = { createChannel, getChannels, forSubs, channelFollower };
