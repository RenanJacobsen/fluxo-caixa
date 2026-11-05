import React, { useState, useEffect } from 'react';
import api from '../api';

function RelatoriosFinanceiros({ atualizar }) {
  const [entradas, setEntradas] = useState([]);
  const [saidas, setSaidas] = useState([]);

  useEffect(() => {
  carregarDados();
}, [atualizar]);

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

  const exportarPDF = () => {
  window.open(
    `${api.defaults.baseURL}/relatorios/pdf`,
    '_blank'
  );
};

  const extrato = [
    ...entradas.map(item => ({
      ...item,
      tipo: 'Entrada'
    })),
    ...saidas.map(item => ({
      ...item,
      tipo: 'Saída'
    }))
  ].sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );

  return (
    <div>

      <h2>Relatório Financeiro</h2>

      <button onClick={exportarPDF}>
        📄 Exportar Relatório PDF
      </button>

      <br />
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Total de Entradas</td>
            <td>R$ {totalEntradas.toFixed(2)}</td>
          </tr>

          <tr>
            <td>Total de Saídas</td>
            <td>R$ {totalSaidas.toFixed(2)}</td>
          </tr>

          <tr>
            <td>Saldo Atual</td>
            <td>R$ {saldo.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2>Extrato Financeiro</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Data</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {extrato.map((movimento) => (
            <tr key={`${movimento.tipo}-${movimento.id}`}>
              <td>
                {new Date(
                  movimento.data
                ).toLocaleDateString('pt-BR')}
              </td>

              <td>
                {movimento.tipo}
              </td>

              <td>
                {movimento.descricao}
              </td>

              <td>
                {movimento.categoria}
              </td>

              <td
                style={{
                  color:
                    movimento.tipo === 'Entrada'
                      ? 'green'
                      : 'red',
                  fontWeight: 'bold'
                }}
              >
                {movimento.tipo === 'Entrada'
                  ? '+'
                  : '-'}
                {' '}
                R$ {Number(
                  movimento.valor
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default RelatoriosFinanceiros;