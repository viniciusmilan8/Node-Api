const mongoose = require('mongoose');

const atendimentosSchema = mongoose.Schema(
  {  
    n_protocolo: {
      type: String,
      required: true,
    },
    TipoAtendimento: {
      type: String,
      required: true,
    }, 
    CanalAtendimento: {
      type: String,
      required: true,
    },  
    NomeResponsavel: {
      type: String,
      required: true,
    },    
    VistoriaRealizada: {
      type: Boolean,
      required: true,
    }, 
    TipoVistoria: {
      type: String,
      required: true,
    }, 
    DataSolicitacao: {
      type: String,
      required: true,
    }, 
    DataVistoria: {
      type: String,
      required: true,
    }, 
    EntregueItensAjuda: {
      type: Boolean,
      required: true,
    }, 
    pendente: {
      type: Boolean,
      required: true,
    }, 
  },
  {
    timestamps: true
  }
);

const Atendimentos = mongoose.model('Atendimentos', atendimentosSchema);

module.exports = Atendimentos;
