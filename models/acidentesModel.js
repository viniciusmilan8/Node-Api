const mongoose = require('mongoose');

const acidentesSchema = mongoose.Schema(
  {  
    DescricaoAcidente: {
      type: String,
      required: [true, "Necessária a descrição do acidente"]
    },
    StatusAcidente: {
      type: String,
      required: true,
    },
    DataAcidente: {
      type: String,
      required: true,
    },    
  },
  {
    timestamps: true
  }
);

const Acidentes = mongoose.model('Acidentes', acidentesSchema);

module.exports = Acidentes;
