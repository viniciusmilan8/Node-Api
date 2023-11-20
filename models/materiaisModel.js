const mongoose = require('mongoose');

const materiaisSchema = mongoose.Schema(
  {  
    Nome: {
      type: String,
      required: true
    },
    Descricao: {
      type: String,
      required: true,
    },
    Quantidade: {
      type: Number,
      required: true,
    },    
  },
  {
    timestamps: true
  }
);

const Materiais = mongoose.model('Materiais', materiaisSchema);

module.exports = Materiais;
