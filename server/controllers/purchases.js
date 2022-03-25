const Purchase = require("../models/purchase");

const create = async (req, res) => {
    try {
        const purchase = new Purchase(req.body); //instanciamos el objeto/model que creamos mediante lo que llega del body
        purchase.users = req.id;                //vinculamos la compra con el user.id
        const data = await purchase.save();
        res.status(201).json({ message: 'Compra realizada con éxito', data })
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}

const all = async (req, res) => {
    try {
      const data = await Purchase.find({ users: req.id }); //retornamos las compras de un user en particular
      res.json({ message: `Todas las compras del usuario ${req.id}`, data });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
};

module.exports = { all, create }