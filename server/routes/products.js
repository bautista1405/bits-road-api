const {Router} = require('express');
const router = Router();

// acá manejamos las rutas del proyecto (GET, POST, PUT, PATCH, DELETE)

router.get('/', (req, res) => {
    res.json(
        {name: "bautista", nickname: "iceman"}
    );
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send();
})

module.exports = router;
