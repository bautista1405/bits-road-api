const { Schema, model } = require("mongoose");
// ts_create, ts_update, idCreate, enable. se usan para temas de auditoría
//ts_create: para saber cuál fue el último producto creado
//ts_update: para saber cuál fue el último producto actualizado
//idCreate: para saber quién fue el usuario que realizó la última inserción
//enable: para manejar los datos de forma lógica, ya no se eliminan datos, sino que son dados de baja

const PurchaseSchema = Schema({
  total: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  users: {                           //esto nos sirve para crear una referencia dentro de una colección, a otra colección
      type: Schema.Types.ObjectId,  //la compra es asignada al usuario que la hizo
      ref: 'User',
      required: true
  },
  enable: {
    type: Boolean,
    default: true,
  },
  idOperation: {
    type: String,
    required: true,
  },
},{timestamps: true},);

module.exports = model("purchases", PurchaseSchema);