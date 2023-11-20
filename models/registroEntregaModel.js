const mongoose = require('mongoose');

const entregasSchema = mongoose.Schema(
  {  
    QuantidadeEntregue: {
      type: Number,
      required: true
    },
    Item: {
      type: String,
      required: true,
    },
    DiaEntregue: {
      type: String,
      required: true,
    },    
  },
  {
    timestamps: true
  }
);

const Entregas = mongoose.model('Entregas', entregasSchema);

module.exports = Entregas;
