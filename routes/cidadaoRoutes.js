const express = require('express');
const router = express.Router();
const Cidadao = require('../models/cidadaoModel');

// Rota para obter todos os cidadãos
router.get('/', async (req, res) => {
  try {
    const cidadaos = await Cidadao.find({});
    res.status(200).json(cidadaos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter um cidadão por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cidadao = await Cidadao.findById(id);
    if (!cidadao) {
      return res.status(404).json({ message: `Não encontrado cidadão de ID ${id}` });
    }
    res.status(200).json(cidadao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para criar um novo cidadão
router.post('/', async (req, res) => {
  try {
    const cidadao = await Cidadao.create(req.body);
    res.status(200).json(cidadao);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Rota para atualizar um cidadão por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cidadao = await Cidadao.findByIdAndUpdate(id, req.body);
    if (!cidadao) {
      return res.status(404).json({ message: `Não encontrado cidadão de ID ${id}` });
    }
    const updatedCidadao = await Cidadao.findById(id);
    res.status(200).json(updatedCidadao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para excluir um cidadão por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cidadao = await Cidadao.findByIdAndDelete(id);
    if (!cidadao) {
      return res.status(404).json({ message: `Não encontrado cidadão de ID ${id}` });
    }
    res.status(200).json(cidadao);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
