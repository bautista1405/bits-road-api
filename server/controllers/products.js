const getAll = (req, res) => {
    res.json(
        {name: "bautista", nickname: "iceman"}
    );
}

const create = (req, res) => {
    console.log(req.body);
    res.send();
}

module.exports = { getAll, create } 
