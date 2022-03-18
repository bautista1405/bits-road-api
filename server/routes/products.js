const {Router} = require('express');
const router = Router();
const {all, create} = require('../controllers/products')

// acá manejamos las rutas del proyecto (GET, POST, PUT, PATCH, DELETE)

router.get('/', all)

router.post('/', create)

module.exports = router;
