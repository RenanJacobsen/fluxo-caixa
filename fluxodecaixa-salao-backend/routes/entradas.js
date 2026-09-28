const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM entradas ORDER BY data DESC'
    );

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({
      erro: error.message
    });
  }
});

module.exports = router;