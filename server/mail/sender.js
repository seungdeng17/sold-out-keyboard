require("dotenv").config();

const nodemailer = require("nodemailer");
const mailTemplate = require("./template.js");

const transporter = nodemailer.createTransport({
  service: "gmail",
  prot: 587,
  host: "smtp.gmlail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function sendEmail(receiverEmail, keyboardNumber) {
  const options = {
    from: "나도 살래 키보드 <email>",
    to: receiverEmail,
    subject: "[나도 살래 키보드] 키보드가 입고 되었어요",
    html: mailTemplate(keyboardNumber),
  };

  transporter.sendMail(options, function (error, info) {
    if (error) {
      return console.log("Mailer error", error);
    }
    console.log("Mail sent: " + info.response);
  });
}

module.exports = {
  sendEmail,
};
