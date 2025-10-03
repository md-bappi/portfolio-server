const nodemailer = require("nodemailer");
const { smtpUsername, smtpPassword } = require("../secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const emailWithNodeMailer = async (emailData) => {
  try {
    const mailOptions = {
      from: emailData.email,
      to: smtpUsername,
      subject: emailData.subject,
      html: emailData.html,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Message send: %s", info.response);
  } catch (error) {
    console.error("email send failed ");
  }
};

module.exports = emailWithNodeMailer;
