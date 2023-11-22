const mongoose = require('mongoose');

const acontecimentoSchema = mongoose.Schema(
  {
    classe: String,
    grupo: String,
    subgrupo: String,
    tipo: String,
    subtipo: String,
    infoCobrade: String,
    dataHora: Date,
    numeroProtocolo: {
      type: String,
      unique: true, // Garante que cada número de protocolo seja único
    },
  },
  {
    timestamps: true,
  }
);

// Middleware para gerar automaticamente o número do protocolo antes de salvar
acontecimentoSchema.pre('save', async function (next) {
  const currentDate = new Date().toISOString().replace(/[-T:Z.]/g, ''); // Formata a data para ser usada no número do protocolo
  this.numeroProtocolo = `PROTOCOLO-${currentDate}`;
  next();
});

const Acontecimento = mongoose.model('Acontecimento', acontecimentoSchema);

module.exports = Acontecimento;
