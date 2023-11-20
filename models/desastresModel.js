const mongoose = require('mongoose');

const desastresSchema = mongoose.Schema(
  {  
    Grupo: {
      type: String,
      required: true,
    },
    Subgrupo: {
      type: String,
      required: true,
    },
    Tipo: {
      type: String,
      required: true,
    },    
  },
  {
    timestamps: true
  }
);

const Desastres = mongoose.model('Desastres', desastresSchema);

module.exports = Desastres;
