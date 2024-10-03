const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller.js');


router.post('/api/usuarios/create', usuarioController.create);
router.get('/api/usuarios/all', usuarioController.retrieveAllUsuarios);
router.get('/api/usuarios/onebyid/:id', usuarioController.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarioController.updateById);
router.delete('/api/usuarios/delete/:id', usuarioController.deleteById);

module.exports = router;
