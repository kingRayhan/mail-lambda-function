const nodemailer = require("nodemailer");

exports.handler = async function (event, context, callback) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.mailtrap.io",
    port: process.env.MAIL_PORT || 2525,
    auth: {
      user: process.env.MAIL_USER || "71c4edf52727f0",
      pass: process.env.MAIL_PASS || "57ba755c3b7fad",
    },
  });

  const { name, email, subject, message } = event.body;

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${name}" <${email}>`,
    to: process.env.MAIL_TO || "example@example.com",
    subject: subject,
    html: message,
    text: message,
  });

  callback(null, {
    statusCode: 200,
    "content-type": "text/json",
    body: JSON.stringify({
      message: info.messageId,
    }),
  });
};
