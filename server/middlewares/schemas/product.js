const Joi = require('@hapi/joi')

const schemas = {
    create: Joi.object().keys({
        title: Joi.string()
            .required()
            .messages({"any.required" : "El título es obligatorio"}),
        price: Joi.number()
            .integer()
            .positive()
            .required()
            .messages({"any.required" : "El precio es obligatorio"}),
        description: Joi.string()
            .min(5)
            .max(100)
            .required()
            .messages({"any.required" : "La descripción es obligatoria"})
    })
};

module.exports = schemas;
