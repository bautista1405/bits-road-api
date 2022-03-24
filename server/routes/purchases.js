const {Router} = require('express');
const router = new Router();
const { all } = require('../controllers/purchases')

// router.post('/', create);
router.get('/', all)

module.exports = router;