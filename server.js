const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes');
const cidadaoRoutes = require('./routes/cidadaoRoutes');
const app = express()

app.use(express.json())
//Rotas dos produtos
app.use('/products', productRoutes);
app.use('/cidadaos', cidadaoRoutes);

//Conexão com o banco
mongoose.connect('mongodb+srv://admin:admin@defesacivilapi.aufaenk.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to mongodb')
    app.listen(3000, ()=> {
        console.log('Node Api app is running on port 3000')
    });
}).catch((error) =>{
    console.log(error)
})