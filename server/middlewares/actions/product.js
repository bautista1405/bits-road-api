const schema = require('../schemas/product')

const validateCreate = (req, res, next) => {
    const {error, value} = schema.create.validate(req.body); //validamos lo que envía el user
    error ? res.status(422).json({ message: 'Datos incorrectos' }) : next();
};

module.exports = { validateCreate }