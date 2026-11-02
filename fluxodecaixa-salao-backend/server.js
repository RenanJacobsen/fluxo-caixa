const express = require('express');
const cors = require('cors');

const entradaRoutes = require('./routes/entradas');
const saidaRoutes = require('./routes/saidas');
const relatorioRoutes = require('./routes/relatorios');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/entradas', entradaRoutes);
app.use('/api/saidas', saidaRoutes);
app.use('/api/relatorios', relatorioRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});