const express = require('express');
const router = express.Router();
const Acidentes = require('../models/acidentesModel');

// Rota para obter todos os cidadãos
router.get('/', async (req, res) => {
  try {
    const acidentes = await Acidentes.find({});
    res.status(200).json(acidentes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter um cidadão por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const acidentes = await Acidentes.findById(id);
    if (!acidentes) {
      return res.status(404).json({ message: `Não encontrado cidadão de ID ${id}` });
    }
    res.status(200).json(acidentes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para criar um novo cidadão
router.post('/', async (req, res) => {
  try {
    const acidentes = await Acidentes.create(req.body);
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
    const acidentes = await Acidentes.findByIdAndUpdate(id, req.body);
    if (!acidentes) {
      return res.status(404).json({ message: `Não encontrado cidadão de ID ${id}` });
    }
    const updatedAcidente = await Acidentes.findById(id);
    res.status(200).json(updatedAcidente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para excluir um cidadão por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const acidentes = await Acidentes.findByIdAndDelete(id);
    if (!acidentes) {
      return res.status(404).json({ message: `Não encontrado cidadão de ID ${id}` });
    }
    res.status(200).json(acidentes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
