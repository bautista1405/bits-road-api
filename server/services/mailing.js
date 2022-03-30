"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async ({
  to = "aramendia30@gmail.com",
  subject = "Nuevo contacto WEB",
  html,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',          //host : "smtp.gmail.com", port : 587,
      secure: false, // true for 465, false for other ports
      auth: {
        //type: 'OAuth2',
        user: "aramendia30@gmail.com", 
        pass: "nljiuvjqbdlauspj", 
      },
      tls: {
        rejectUnauthorized: false,
      },
  });
    
      // send mail with defined transport object
      const { messageId } = await transporter.sendMail({
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
