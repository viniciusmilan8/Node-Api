const mongoose = require('mongoose');

const atendimentosSchema = mongoose.Schema(
  {  
    CpfResposavel: {
      type: String,
      required: [true, "Necessário o cpf do responsável"]
    },    
  },
  {
    timestamps: true
  }
);

const Atendimentos = mongoose.model('Acidentes', atendimentosSchema);

module.exports = Atendimentos;
