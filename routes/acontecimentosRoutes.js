const express = require('express');
const router = express.Router();
const Acontecimento = require('../models/acontecimentosModel');

// Rota para obter todos os acontecimentos
router.get('/', async (req, res) => {
  try {
    const acontecimentos = await Acontecimento.find({});
    res.status(200).json(acontecimentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter um acontecimento por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const acontecimento = await Acontecimento.findById(id);
    if (!acontecimento) {
      return res.status(404).json({ message: `Não encontrado acontecimento de ID ${id}` });
    }
    res.status(200).json(acontecimento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para criar um novo acontecimento
router.post('/', async (req, res) => {
  try {
    // Gere um número de protocolo único (você pode personalizar essa lógica conforme necessário)
    const numeroProtocolo = generateUniqueProtocolNumber();

    // Crie o objeto acontecimento com o número de protocolo gerado
    const acontecimentoData = { ...req.body, numeroProtocolo };
    
    // Crie o acontecimento no banco de dados
    const acontecimento = await Acontecimento.create(acontecimentoData);

    res.status(200).json(acontecimento);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Função para gerar um número de protocolo único (exemplo simples)
function generateUniqueProtocolNumber() {
  // Lógica para gerar um número de protocolo único (você pode implementar uma lógica mais robusta)
  return Math.floor(Math.random() * 1000000);
}

// Rota para atualizar um acontecimento por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const acontecimento = await Acontecimento.findByIdAndUpdate(id, req.body);
    if (!acontecimento) {
      return res.status(404).json({ message: `Não encontrado acontecimento de ID ${id}` });
    }
    const updatedAcontecimento = await Acontecimento.findById(id);
    res.status(200).json(updatedAcontecimento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para excluir um acontecimento por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const acontecimento = await Acontecimento.findByIdAndDelete(id);
    if (!acontecimento) {
      return res.status(404).json({ message: `Não encontrado acontecimento de ID ${id}` });
    }
    res.status(200).json(acontecimento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
