const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// GET: formulario login
router.get('/login', authController.showLoginForm);

// POST: procesar login
router.post('/login', authController.login);

module.exports = router;
