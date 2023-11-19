const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

//Buscar todos os produtos
router.get('/', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Buscar um produto por id
router.get('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Atualizar produto por id
router.put('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `Nao encontrado produto de id ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Deletar produto por id
router.delete('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `Nao encontrado produto de id ${id}`})
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Inserir novo produto
router.post('/', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
