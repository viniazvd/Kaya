const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
  nome: String,
  sobrenome: String,
  email: String,
  senha: String
})

const user = mongoose.model('User', userSchema)

module.exports = user
