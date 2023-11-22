const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const cidadaoRoutes = require('./routes/cidadaoRoutes');
const acontecimentosRoutes = require('./routes/acontecimentosRoutes');
const authRouter = require('./routes/usuarioRoutes');
const atendimentosRoute = require('./routes/atendimentosRoutes');
const app = express()

app.use(express.json())
app.use(cors());

//Rotas dos produtos
app.use('/auth', authRouter);
app.use('/cidadaos', cidadaoRoutes);
app.use('/acontecimentos', acontecimentosRoutes);
app.use('/atendimentos', atendimentosRoute);

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