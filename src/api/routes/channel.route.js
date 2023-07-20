const { Router } = require("express");
const {
  createChannel,
  getChannels,
  forSubs,
  channelFollower,
} = require("../controllers/channel.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();


router.post("/channel", isAuth, createChannel);
router.get("/channels", isAuth, getChannels); 
router.post("/channel/subs", isAuth, forSubs);
router.post("/channel/admin", isAuth, channelFollower);

module.exports = router;
