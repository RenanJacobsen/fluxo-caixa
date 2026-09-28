const express = require('express');
const cors = require('cors');

const entradaRoutes = require('./routes/entradas');
const saidaRoutes = require('./routes/saidas');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/entradas', entradaRoutes);
app.use('/api/saidas', saidaRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});