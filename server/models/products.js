const getAll = () => {
    return [
        {
            id: "1",
            title: "Apuntes Javascript",
            price: 200,
            description: "Los mejores apuntes de Javascript"
        },
        {
            id: "2",
            title: "Apuntes Python",
            price: 170,
            description: "Los mejores apuntes de Python"
        },
        {
            id: "3",
            title: "Apuntes PHP",
            price: 150,
            description: "Los mejores apuntes de PHP"
        }
    ]
}

module.exports = { getAll }