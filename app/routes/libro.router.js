const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller.js');

router.post('/api/libros/create', libroController.create);
router.get('/api/libros/all', libroController.retrieveAllLibros);
router.get('/api/libros/onebyid/:id', libroController.getLibroById);
router.put('/api/libros/update/:id', libroController.updateById);
router.delete('/api/libros/delete/:id', libroController.deleteById);
module.exports = router;
