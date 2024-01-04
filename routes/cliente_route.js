const { Router } = require('express');

const { clienteGetAll } = require('../controllers/cliente_controller')



const router = Router();

router.get('/', clienteGetAll );

module.exports = router;