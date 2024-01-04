const { Router } = require('express');
const { body, param } = require('express-validator');
const { usuarioGetAll, usuarioCreate } = require('../controllers/usuario_controller')

const { validarCampos } = require('../middlewares/validar-campos')

const router = Router();

router.get('/', usuarioGetAll );

router.post('/', [
    body('name', 'El campo "name" es obligatorio').notEmpty(),
    body('email', 'El campo "email" es obligatorio').notEmpty(),
    body('password', 'El campo "password" es obligatorio').notEmpty(),    
    validarCampos
], usuarioCreate );


module.exports = router;