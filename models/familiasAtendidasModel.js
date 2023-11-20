const mongoose = require('mongoose');

const familiasAtendidasModel = mongoose.Schema(
  {  
    CPF_Responsavel: {
      type: String,
      required: true
    },
    Status: {
      type: String,
      required: true,
    },
    EnderecoAtendimento: {
      type: String,
      required: true,
    },
    DataAtendimento: {
      type: Date,
      required: true,
    },    
  },
  {
    timestamps: true
  }
);

const FamiliasAtendidas = mongoose.model('FamiliasAtendidas', familiasAtendidasModel);

module.exports = FamiliasAtendidas;
