const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ruta Admin funcionando');
});

module.exports = router;
