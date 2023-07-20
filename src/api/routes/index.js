const yes = require("./channel.route");
const router = require("./home.route");
const route = require("./subscription.route")

module.exports = [router, yes, route];
