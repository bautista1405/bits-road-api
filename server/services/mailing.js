"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async ({
    to = process.env.USER_EMAIL,
    subject = "Nuevo contacto WEB",
    html,
  }) => {

  try {

      // create reusabe transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: "gmail",                         // {host: "smtp.ethereal.email", port: 587},
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.USER_EMAIL, 
          pass: process.env.PASSWORD_EMAIL, 
        },
        tls: {
            rejectUnauthorized: false
        }
      });
    
      // send mail with defined transport object
      let { messageId } = await transporter.sendMail({
        from: '"Bauti 👻" <no-reply@bitsroad.com>',
        to,
        subject,
        html
      });
    
      return messageId;
      
  } catch (e) {
      console.error(e);
      throw e;
  }
}

module.exports = { sendMail }
