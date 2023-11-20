const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema(
  {  
    nome: {
      type: String,
      required: [true, "Nome é obrigatório"]
    },
    sobrenome: {
      type: String,
      required: true,
    },
    CPF: {
      type: String,
      required: true,
    },
    Observacoes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
