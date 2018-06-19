
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a API Rest para Curso')
})

module.exports = router