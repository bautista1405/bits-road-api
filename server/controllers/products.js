const products = [
    {
        id: '1',
        title: 'Apuntes Javascript',
        price: 200,
        description: 'Los mejores apuntes de Javascript'
    },
    {
        id: '2',
        title: 'Apuntes Python',
        price: 170,
        description: 'Los mejores apuntes de Python'
    },
    {
        id: '3',
        title: 'Apuntes PHP',
        price: 150,
        description: 'Los mejores apuntes de PHP'
    }
]

const all = (req, res) => {
    res.json(
        {products}
    );
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
    const product = products.find((product) => product.id == id );
    res.json(product);
}

module.exports = { all, create, find } 
