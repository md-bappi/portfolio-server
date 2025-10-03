require("dotenv").config();

const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;

module.exports = {
  smtpUsername,
  smtpPassword,
};
