const {Router} = require('express');
const router = Router();

const multer = require('multer');
const upload = multer()

const { create } = require('../../controllers/products');

router.post('/', upload.array('photos'), create)

module.exports = router;