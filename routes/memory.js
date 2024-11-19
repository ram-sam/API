const express = require('express');
const { addMemoryData, getMemoryData, removeMemoryData } = require('../controllers/memoryController');
const auth = require('../middleware/auth');
const router = express.Router();

// Rota para adicionar dados temporários
router.post('/', auth, addMemoryData);

// Rota para obter dados temporários
router.get('/', auth, getMemoryData);

// Rota para remover dados temporários
router.delete('/', auth, removeMemoryData);

module.exports = router;
