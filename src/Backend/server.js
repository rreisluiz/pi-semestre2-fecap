const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/itemsRoutes')
const interestsRoutes = require('./routes/interestsRoutes')
const app = express();
const cors = require('cors');

require('dotenv').config();

// Middleware para processar dados no formato JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permite solicitações do frontend
    optionsSuccessStatus: 200
}));

// Porta do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
    res.send('Servidor Funcionando')
})

app.use('/users', usersRoutes);
app.use('/items', productsRoutes);
app.use('/interests', interestsRoutes);