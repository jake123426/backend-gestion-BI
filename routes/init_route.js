const { Router } = require('express');

const { init } = require('../controllers/init_controller')



const router = Router();

router.get('/', init );


module.exports = router;