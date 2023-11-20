const mongoose = require('mongoose');

const cidadaoSchema = mongoose.Schema(
  {  
    name: {
      type: String,
      required: [true, "Nome é obrigatório"]
    },
    cpf: {
      type: Number,
      required: true,
    },
    rg: {
      type: Number,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    rua: {
      type: String,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    numeroCasa: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Cidadao = mongoose.model('Cidadao', cidadaoSchema);

module.exports = Cidadao;
