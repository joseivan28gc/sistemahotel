const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autor.controller.js');

router.post('/api/autores/create', autorController.create);
router.get('/api/autores/all', autorController.retrieveAllAutores);
router.get('/api/autores/onebyid/:id', autorController.getAutorById);
router.put('/api/autores/update/:id', autorController.updateById);
router.delete('/api/autores/delete/:id', autorController.deleteById);
module.exports = router;
