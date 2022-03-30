const Purchase = require("../models/purchase");
const { newPurchase } = require("../services/purchase");

const create = async (req, res) => {
    try {
      const purchaseTransaction  = await newPurchase(req);
      if (purchaseTransaction === "PURCHASE_OK")
      return res.status(201).json({ message: "Compra exitosa" });
    if (purchaseTransaction === "INVALID_PURCHASE")
      return res.status(400).json({ message: "Oopsss, algo salió mal" });
    if (purchaseTransaction === "PROBLEMS_WITH_PROCCESSING_PURCHASE")
      return res.sendStatus(500);
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