const { Router } = require('express');
const { body, param } = require('express-validator');
const { productoGetAll, productoCreate } = require('../controllers/producto_controller')

const { validarCampos } = require('../middlewares/validar-campos')

const router = Router();

router.get('/', productoGetAll );

router.post('/', [
    body('nombre', 'El campo "nombre" es obligatorio').notEmpty(),
    body('descripcion', 'El campo "descripcion" es obligatorio').notEmpty(),
    body('fecha_caducidad', 'El campo "fecha_caducidad" es obligatorio').notEmpty(),    
    body('precio_unitario', 'El campo "precio_unitario" es obligatorio').notEmpty(),    
    body('activo', 'El campo "activo" es obligatorio').notEmpty(),    
    body('user_id', 'El campo "user_id" es obligatorio').notEmpty(),    
    validarCampos
], productoCreate );


module.exports = router;