const {Router} = require('express');

const { create, auth, validateAuth } = require('../controllers/auth')

const router = Router();


// acá manejamos las rutas de los users


router.post('/', create)
router.post('/login', auth)
router.get("/authorization/:verificationCode", validateAuth);

module.exports = router;
