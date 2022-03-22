const { Schema, model } = require("mongoose");
// ts_create, ts_update, idCreate, enable. se usan para temas de auditoría
//ts_create: para saber cuál fue el último producto creado
//ts_update: para saber cuál fue el último producto actualizado
//idCreate: para saber quién fue el usuario que realizó la última inserción
//enable: para manejar los datos de forma lógica, ya no se eliminan datos, sino que son dados de baja

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  enable: {
    type: Boolean,
    default: false,
  },
  ts_create: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("users", UserSchema);