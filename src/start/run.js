const config = require("../../config");
const { connect } = require("mongoose");

const run = async (app) => {
  try {
    await connect("mongodb://127.0.0.1:27017/subscription");
    console.log("connected to MongoDB");

    app.listen(config.port, () => {
      console.log(config.port);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = run;
