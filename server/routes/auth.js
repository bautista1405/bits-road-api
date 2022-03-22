const {Router} = require('express');

const { create } = require('../controllers/auth')

const router = Router();


// acá manejamos las rutas de los users


router.post('/', create)


module.exports = router;
