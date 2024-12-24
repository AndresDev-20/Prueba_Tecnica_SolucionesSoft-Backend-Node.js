const { create, getAll, remove, update } = require('../controllers/image.controllers');
const upload = require('../utils/multer');
const express = require('express');

const routerImage = express.Router();

// Crear o actualizar las imágenes de un usuario
routerImage.route('/')
.get(getAll)
.post(upload.single('image'), create);
  
// Obtener las imágenes de un usuario
routerImage.route('/:id')
    .put(upload.single('image'), update) // Aplicar el middleware aquí
    .delete(remove);


module.exports = routerImage;
