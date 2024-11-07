const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// rota para registrar um novo usuário
router.post('/register', register);

// rota para login e=de usuário
router.post('/login', login);

module.exports = router;