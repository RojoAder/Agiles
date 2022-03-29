const usuariosModel = require('../models/usuariosModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

//Método para obtener Usuarios
exports.obtenerTodos = async (req, res, next) => {
    try {
      const usuarios = await usuariosModel.find()
      console.log('-----Usuarios-----')
      console.log(usuarios)
      res.status(201).json({
        status: 'success',
        data: {
          usuario: usuarios,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

//Agregar a un Usuario
exports.agregarUsuario = catchAsync(async (req, res, next) => {
    try {
      const consulta = await usuariosModel.find()
      if (consulta.length != 0) {
        const ultimo = await usuariosModel.find().limit(1).sort({ $natural: -1 })
        req.body.id_usuario = ultimo[0].id_usuario + 1
      } else {
        req.body.id_usuario = 0
      }
      console.log(req.body)
      const crearUsuario = usuariosModel.create(req.body)
      res.status(201).json({
        status: 'success',
        data: {
          usuario: crearUsuario,
        },
      })
    } catch (error) {
      console.log(error)
    }
  })

  //Método para obtener Usuario por ID
exports.obtenerPorID = catchAsync(async (req, res, next) => {
    console.log(req.params.id)
    const usuario = await usuariosModel.findById(req.params.id)
    console.log('-----Usuarios-----')
    console.log(usuario)
    if (!usuario) {
      return next(
        new AppError(`No hay Usuarios con el id: ${req.params.id}`, 404)
      )
    } else {
      res.status(201).json({
        status: 'success',
        data: {
          usuario: usuario,
        },
      })
    }
  })

  //Método para actualizar un Usuario

exports.actualizarPorID = catchAsync(async (req, res, next) => {
    const usuario = await usuariosModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
  
    if (!usuario) {
      return next(
        new AppError(`No hay usuarios con el id: ${req.params.id}`, 404)
      )
    } else {
      res.status(200).json({
        status: 'success',
        data: {
          usuario: usuario,
        },
      })
    }
  })

  //Método para borrar Usuario

exports.borrarUsuarioPorId = catchAsync(async (req, res, next) => {
    const borrado = await usuariosModel.findByIdAndDelete(req.params.id)
  
    if (!borrado) {
      return next(
        new AppError(`No hay usuarios con el id: ${req.params.id}`, 404)
      )
    } else {
      res.status(200).json({
        status: 'success',
        data: {
          usuario: borrado,
        },
      })
    }
  })

