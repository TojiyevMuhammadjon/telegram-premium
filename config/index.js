require("dotenv/config");
const { env } = process;

const config = {
  port: +env.PORT,
  jwt_secret: env.JWT_SECRET_KEY,
};

module.exports = config;
