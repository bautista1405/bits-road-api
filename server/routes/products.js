const {Router} = require('express');
const router = Router();
const {all, create, single} = require('../controllers/products')

// acá manejamos las rutas del proyecto (GET, POST, PUT, PATCH, DELETE)

router.get('/', all)

router.post('/', create)

router.get('/:id', single)

module.exports = router;
