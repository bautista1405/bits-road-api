const product = require('../models/product')

const all = async (_, res) => {
   try {
        const data = await product.find();
        res.json(data);
   } catch (e) {
       console.error(e);
       res.sendStatus(500);
   }
}

const create = (req, res) => {
    const {
        title,
        price,
        description
    } = req.body
    console.log(req.body);
    res.status(200).json({ message: 'Product created successfully'});
}

const find = (req, res) => {
    const { id } = req.params;
    const products = getAll();
    const product = products.find((product) => product.id === id );
    res.json(product);
}

module.exports = { all, create, find } 
