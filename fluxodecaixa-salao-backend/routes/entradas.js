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

router.post('/', async (req, res) => {
  try {

    const {
      descricao,
      categoria,
      cliente,
      valor,
      data
    } = req.body;

    await db.query(
      `INSERT INTO entradas
       (descricao, categoria, cliente, valor, data)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        descricao,
        categoria,
        cliente,
        valor,
        data
      ]
    );

    res.status(201).json({
      mensagem: 'Entrada cadastrada com sucesso'
    });

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });

  }
});

router.delete('/:id', async (req, res) => {
  try {

    const { id } = req.params;

    await db.query(
      'DELETE FROM entradas WHERE id = $1',
      [id]
    );

    res.json({
      mensagem: 'Entrada excluída com sucesso'
    });

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });

  }
});

module.exports = router;