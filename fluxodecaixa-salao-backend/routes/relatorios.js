const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const db = require('../db');

router.get('/pdf', async (req, res) => {
  try {

    const entradas = await db.query(
      'SELECT * FROM entradas'
    );

    const saidas = await db.query(
      'SELECT * FROM saidas'
    );

    const totalEntradas =
      entradas.rows.reduce(
        (total, item) => total + Number(item.valor),
        0
      );

    const totalSaidas =
      saidas.rows.reduce(
        (total, item) => total + Number(item.valor),
        0
      );

    const saldo =
      totalEntradas - totalSaidas;

    const doc = new PDFDocument();

    res.setHeader(
      'Content-Type',
      'application/pdf'
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=relatorio-financeiro.pdf'
    );

    doc.pipe(res);

    doc.fontSize(20);
    doc.text('RELATORIO FINANCEIRO');

    doc.moveDown();

    doc.fontSize(12);
    doc.text(
      `Total Entradas: R$ ${totalEntradas.toFixed(2)}`
    );

    doc.text(
      `Total Saidas: R$ ${totalSaidas.toFixed(2)}`
    );

    doc.text(
      `Saldo Atual: R$ ${saldo.toFixed(2)}`
    );

    doc.moveDown();

    doc.fontSize(16);
    doc.text('EXTRATO FINANCEIRO');

    doc.moveDown();

    const extrato = [
      ...entradas.rows.map(item => ({
        ...item,
        tipo: 'ENTRADA'
      })),
      ...saidas.rows.map(item => ({
        ...item,
        tipo: 'SAIDA'
      }))
    ].sort(
      (a, b) =>
        new Date(b.data) - new Date(a.data)
    );

    doc.fontSize(8);

    extrato.forEach(item => {

      const sinal =
        item.tipo === 'ENTRADA'
          ? '+'
          : '-';

      const data =
        new Date(item.data)
          .toLocaleDateString('pt-BR');

      doc.text(
        `${data} | ${item.tipo} | ${item.descricao} | ${item.categoria} | ${sinal}R$ ${Number(item.valor).toFixed(2)}`
      );

    });

    doc.end();

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });

  }
});

module.exports = router;
