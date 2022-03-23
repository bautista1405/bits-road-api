const User = require('../models/user')
const { hash } = require('../utils/bcrypt')

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

module.exports = { create }