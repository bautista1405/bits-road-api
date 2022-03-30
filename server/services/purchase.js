const Purchase = require("../models/purchase");
const {
  approvePurchaseProducts,
  updateStock,
} = require("../controllers/products");
const { getTotalPrice } = require("../utils/purchase");
const { v4: uuidv4 } = require('uuid'); // operation id


const newPurchase = async (req) => {
  try {
    const idOperation = uuidv4();
    const { products } = req.body;
    const purchase = new Purchase(products);
    purchase.users = req.id;
    purchase.idOperation = idOperation;
    // transaction
    const validPurchase = await approvePurchaseProducts(products); // <Promise>
    if (!validPurchase) return "INVALID_PURCHASE";
    const total = getTotalPrice(products);
    purchase.total = total;
    await purchase.save();
    await updateStock(products);
    // transaction end
    
  } catch (e) {
    return "PROBLEMS_WITH_PROCCESSING_PURCHASE";
  }
};

module.exports = { newPurchase };