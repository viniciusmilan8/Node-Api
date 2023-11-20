const mongoose = require('mongoose');

const enderecoSchema = mongoose.Schema(
  {  
    Rua: {
      type: String,
      required: [true, "Nome é obrigatório"]
    },
    Bairro: {
      type: String,
      required: true,
    },
    Cep: {
      type: String,
      required: true,
    },
    UF: {
      type: String,
      required: true,
    },
    Cidade: {
      type: String,
      required: true,
    },
    Estado: {
      type: String,
      required: true,
    },
    NumeroResidencia: {
      type: Number,
      required: true,
    },
    PessoaID: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const Endereco = mongoose.model('Endereco', enderecoSchema);

module.exports = Endereco;
