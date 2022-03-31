const { Schema, model } = require("mongoose");
// ts_create, ts_update, idCreate, enable. se usan para temas de auditoría
//ts_create: para saber cuál fue el último producto creado
//ts_update: para saber cuál fue el último producto actualizado
//idCreate: para saber quién fue el usuario que realizó la última inserción
//enable: para manejar los datos de forma lógica, ya no se eliminan datos, sino que son dados de baja

const UserSchema = Schema(
    {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
    dateExpirationCode: {
      type: Date,
      required: true,
    },
    verificationCode: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user'
    },
    enable: {
      type: Boolean,
      default: false,
    }
  },
   {timestamps: true}, // createdAt -> Date.now | updatedAt -> Date.now -> update -> Date.now
);

module.exports = model("users", UserSchema);