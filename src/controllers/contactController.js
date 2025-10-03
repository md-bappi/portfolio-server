const emailWithNodeMailer = require("../helper/email");

const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // prepare email
    const emailData = {
      email,
      subject: `Message send : ${name}`,
      html: `
      <h2>${name}</h2>
      <address>${email}</address>
      <p>${message}</p>
      `,
    };

    await emailWithNodeMailer(emailData);

    res.status(200).json({ message: "message sent" });
  } catch (error) {
    console.log("send error", error);
  }
};

module.exports = sendMail;
