import React, { useState, useEffect } from 'react';
import api from '../api';

function RelatoriosFinanceiros() {
  const [entradas, setEntradas] = useState([]);
  const [saidas, setSaidas] = useState([]);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const entradasResponse = await api.get('/entradas');
      const saidasResponse = await api.get('/saidas');

      setEntradas(entradasResponse.data);
      setSaidas(saidasResponse.data);
    } catch (error) {
      console.error('Erro ao carregar relatório:', error);
    }
  };

  const totalEntradas = entradas.reduce(
    (total, item) => total + Number(item.valor),
    0
  );

  const totalSaidas = saidas.reduce(
    (total, item) => total + Number(item.valor),
    0
  );

  const saldo = totalEntradas - totalSaidas;

  return (
    <div>
      <h2>Relatório Financeiro</h2>

      <div>
        <h3>Total de Entradas</h3>
        <p>R$ {totalEntradas.toFixed(2)}</p>
      </div>

      <div>
        <h3>Total de Saídas</h3>
        <p>R$ {totalSaidas.toFixed(2)}</p>
      </div>

      <div>
        <h3>Saldo Atual</h3>
        <p>R$ {saldo.toFixed(2)}</p>
      </div>

      <div>
        <h3>Quantidade de Entradas</h3>
        <p>{entradas.length}</p>
      </div>

      <div>
        <h3>Quantidade de Saídas</h3>
        <p>{saidas.length}</p>
      </div>
    </div>
  );
}

export default RelatoriosFinanceiros;