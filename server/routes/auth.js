const {Router} = require('express');

const { create, auth } = require('../controllers/auth')

const router = Router();


// acá manejamos las rutas de los users


router.post('/', create)
router.post('/login', auth)


module.exports = router;
