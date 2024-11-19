const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transaction');
const goalRoutes = require('./routes/goals');
const memoryRoutes = require('./routes/memory'); // Adiciona esta linha
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao banco de dados
connectDB();

const app = express();

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Definir rotas
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/memory', memoryRoutes); // Adiciona esta linha

const PORT = process.env.PORT || 5000;

// Iniciar o servidor
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
