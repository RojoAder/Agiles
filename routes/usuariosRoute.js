const express = require('express')
const clientesController = require('../controllers/usuariosController')

const router = express.Router()

router
  .route('/')
  .get(usuariosController.obtenerTodos)
  .post(usuariosController.agregarUsuario)

router
  .route('/:id')
  .get(usuariosController.obtenerPorID)
  .patch(usuariosController.actualizarPorID)
  .delete(usuariosController.borrarUsuarioPorId)

module.exports = router