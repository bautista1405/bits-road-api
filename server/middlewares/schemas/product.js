const Joi = require('@hapi/joi')

const schemas = {
    create: Joi.object().keys({
        title: Joi.string().required(),
        price: Joi.number().integer().positive().required(),
        description: Joi.string().min(5).max(100).required()
    })
};

module.exports = schemas;
