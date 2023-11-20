const mongoose = require('mongoose');

const funcionariosModel = mongoose.Schema(
  {  
    Nome: {
      type: String,
      required: true
    },
    Sobrenome: {
      type: String,
      required: true,
    },
    UsuarioSistema: {
      type: String,
      required: true,
    },
    Senha: {
      type: String,
      required: true,
    },    
  },
  {
    timestamps: true
  }
);

const Funcionarios = mongoose.model('Funcionarios', funcionariosModel);

module.exports = Funcionarios;
