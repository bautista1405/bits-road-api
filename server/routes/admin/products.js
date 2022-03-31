const {Router} = require('express');
const router = Router();

router.post('/', () => {
    console.log('Hi admin');
    
})

module.exports = router;