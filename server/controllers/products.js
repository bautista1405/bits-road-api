const Product = require('../models/product');
const { createProduct } = require('../services/product');

const all = async (_, res) => {
   try {
        const data = await product.find();
        res.json(data);
   } catch (e) {
       console.error(e);
       res.sendStatus(500);
   }
}

const create = async (req, res) => {
    try {

      console.log(req.body)
      console.log(req.files)
      const newProduct = createProduct(req.body, req.files);
      console.log(newProduct);
      const product = new Product(newProduct);
      await product.save();
      res.status(201).json({message: 'Producto dado de alta'})
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
}

const single = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await product.findById(id);
        res.json(data);
    } catch (e) {
        console.error(e);
    }
}

const approvePurchaseProducts = async (products) => {
    const productsArray = products.map(({ id, price, quantity }) =>
      product.find({
        _id: id,
        price: price,
        stock: { $gte: quantity },
        enable: true,
      })
    );
  
    const [approvePurchaseResult] = await Promise.all(productsArray); // []
    if (approvePurchaseResult.length) return true; // [[]]
    return false;
};

const updateStock = async (products) => {
    console.log(products);
    try {
      const resultantStock = products.map(({ id, quantity }) => {
        product.updateOne(
          { _id: id },
          {
            $inc: { stock: - quantity },  //increment operator
          }
        );
      });
      const [updatedStock] = await Promise.all(resultantStock);
      console.log(updatedStock);
      return;
    } catch (e) {
      console.error(e);
    }
};

module.exports = { all, create, single, approvePurchaseProducts, updateStock } 
