const uid = require('uuid');
const moment = require('moment');
const User = require('../models/user')
const { hash, unhash } = require('../utils/bcrypt')
const { createToken } = require('../services/auth')
const { sendMail } = require('../services/mailing')

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

    }
}

const create = async (req, res) => {
    try {
        const { email, password, name, lastname } = req.body;
        //comprobar que el mail no está en uso

        let user = await User.findOne({ email });
        if(user) return res.status(400).json({ message: 'El mail ya está en uso' })
        user = new User(req.body);
        user.password = hash(password);
        const verificationCode = uid();
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

module.exports = { create, auth }