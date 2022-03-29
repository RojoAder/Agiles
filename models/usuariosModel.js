const mongoose = require('mongoose')
//Creando schemas

//Esquema para usuarios
const usuarioSchema = mongoose.Schema({
  id_usuario: Number,
  nombre: String,
  email: String,
  contraseña: String,
})


//Definición del modelo
const usuariosModel = mongoose.model('usuarios', usuarioSchema)
module.exports = usuariosModel