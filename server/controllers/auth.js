const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const User = require('../models/user');
const { hash, unhash } = require('../utils/bcrypt');
const { createToken } = require('../services/auth');
const { sendMail } = require('../services/mailing');
const { registerTemplate } = require('../utils/registerTemplate')

const auth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }, { password: 1 });
        const isPasswordValid = unhash(password, user.password);
        
        const JWTObject = {
            _id: user._id,
            email
        }

        const JWT = createToken(JWTObject)

        if(!isPasswordValid) {
            return res
            .status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
        res.json({ message: 'Bienvenid@', JWT });
        res.end();

    } catch (e) {
        console.error(e);
        //verificar si existe el usuario, si no existe retornar un 401
    }
}

const validateAuth = async (req, res) => {
    try {
      const { verificationCode } = req.params;
      await User.findOneAndUpdate({ verificationCode }, { enable: true });
      res.redirect('http://localhost:3000/api/auth/login');
    } catch (e) {
      res.redirect(
        'http://localhost:3000/api/auth/login?error=INVALID_VALIDATION_EMAIL'
      );
    }
};

const create = async (req, res) => {
    try {
        const { email, password, name, lastname } = req.body;
        //comprobar que el mail no está en uso

        let user = await User.findOne({ email });
        if(user) return res.status(400).json({ message: 'El mail ya está en uso' })
        user = new User(req.body);
        user.password = hash(password);
        const verificationCode = uuidv4();
        user.verificationCode = verificationCode;
        user.dateExpirationCode = moment(new Date()).add(2, 'hours')
        await user.save();
        sendMail({
            to: email,
            subject: "Gracias por registrarte 😁",
            html: registerTemplate({ name, lastname, verificationCode }),
        });
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = { create, auth, validateAuth}