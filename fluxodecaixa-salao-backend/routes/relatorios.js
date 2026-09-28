const express = require('express');
const router = express.Router();

router.get('/resumo', async (req, res) => {
  // resumo financeiro
});

module.exports = router;


router.post('/', async (req, res) => {
  console.log("Dados recebidos:", req.body);
});
