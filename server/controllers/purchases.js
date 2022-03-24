const Purchase = require("../models/purchase");

const all = async (req, res) => {
    try {
      const data = await Purchase.find({ users: req.id });
      res.json({ message: `Todas las compras del usuario ${req.id}`, data });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
};

module.exports = { all }