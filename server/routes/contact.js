const {Router} = require('express');
const router = new Router();
const { contactEmail } = require('../controllers/contact')

router.post('/', contactEmail)

module.exports = router;