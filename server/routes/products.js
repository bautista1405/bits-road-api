const {Router} = require('express');
const router = Router();
const {all, create, find} = require('../controllers/products')
const { validateCreate } = require('../middlewares/actions/product')

// acá manejamos las rutas del proyecto (GET, POST, PUT, PATCH, DELETE)

router.get('/', all)

router.post('/', validateCreate, create)

router.get('/:id', find)

module.exports = router;
