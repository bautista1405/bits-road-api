const registerTemplate = ({ name, lastname, verificationCode }) =>
  `
        <html>
        <head></head>
        <body>
            <h3>¡Hola ${name}, ${lastname}. Gracias por registrarte!</h3>
            <a href="http://localhost:3000/api/auth/authorization/${verificationCode}">Click acá para confirmar la cuenta </a>
        </body>
        </html>
    `;

module.exports = { registerTemplate }