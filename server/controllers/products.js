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
    console.log(req.body);
    res.send();
}

module.exports = { all, create } 
