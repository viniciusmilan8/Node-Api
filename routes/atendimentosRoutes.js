const express = require('express');
const router = express.Router();
const Atendimentos = require('../models/atendimentosModel');

// Rota para obter todos os atendimentos
router.get('/', async (req, res) => {
  try {
    const atendimentos = await Atendimentos.find({});
    res.status(200).json(atendimentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter um atendimento por ID
router.get('/atendimento', async (req, res) => {
  try {
    const { id } = req.params;
    const atendimento = await Atendimentos.findById(id);
    if (!atendimento) {
      return res.status(404).json({ message: `Não encontrado atendimento de ID ${id}` });
    }
    res.status(200).json(atendimento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para criar um novo atendimento
router.post('/cria_atendimento', async (req, res) => {
  try {
    const {
      n_protocolo,
      TipoAtendimento,
      CanalAtendimento,
      NomeResponsavel,
      VistoriaRealizada,
      TipoVistoria,
      DataSolicitacao,
      DataVistoria,
      EntregueItensAjuda,
      pendente
    } = req.body;

    // Validar se todos os campos obrigatórios estão presentes
    if (
      !n_protocolo ||
      !TipoAtendimento ||
      !CanalAtendimento ||
      !NomeResponsavel ||
      VistoriaRealizada === undefined ||
      !TipoVistoria ||
      !DataSolicitacao ||
      !DataVistoria ||
      EntregueItensAjuda === undefined ||
      pendente === undefined
    ) {
      return res.status(400).json({ message: 'Por favor, forneça todos os campos obrigatórios.' });
    }

    const atendimento = await Atendimentos.create(req.body);
    res.status(200).send('Atendimento criado com sucesso!');
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Rota para atualizar um atendimento existente
router.put('/atualiza_atendimento/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const atendimento = await Atendimentos.findByIdAndUpdate(id, req.body, { new: true });
    if (!atendimento) {
      return res.status(404).json({ message: `Não encontrado atendimento de ID ${id}` });
    }
    res.status(200).json(atendimento);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Rota para deletar um atendimento existente
router.delete('/deletar_atendimento', async (req, res) => {
  try {
    const { id } = req.params;
    const atendimento = await Atendimentos.findByIdAndDelete(id);
    if (!atendimento) {
      return res.status(404).json({ message: `Não encontrado atendimento de ID ${id}`});
    }
    res.status(200).json({ message: `Atendimento de ID ${id} deletado com sucesso!`});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;