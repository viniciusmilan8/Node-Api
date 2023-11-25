const express = require('express');
const router = express.Router();
const User = require('../models/usuarioModel');

// Rota de registro
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }] });

    if (existingUser) {
      return res.status(400).json({ error: 'Email já está em uso' });
    }

    const newUser = new User({ username, email, password });
    const user = await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Nome de usuário ou senha incorretos' });
    }

    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ message: 'Nome de usuário ou senha incorretos' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
