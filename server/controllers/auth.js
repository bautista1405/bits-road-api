const User = require('../models/user')
const { hash, unhash } = require('../utils/bcrypt')

const auth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }, { password: 1 });
        console.log(user);

        //genero JWT con user._id
        const isPasswordValid = unhash(password, user.password);
        console.log(isPasswordValid);
        if(!isPasswordValid) {
            return res
            .status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
        res.json({ message: 'Bienvenid@', JWT: user._id });
        res.end();

    } catch (e) {

    }
}

const create = async (req, res) => {
    try {
        const { email, password } = req.body;
        //comprobar que el mail no está en uso

        let user = await User.findOne({ email });
        if(user) return res.status(400).json({ message: 'El mail ya está en uso' })
        user = new User(req.body);
        user.password = hash(password);
        await user.save();
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = { create, auth }