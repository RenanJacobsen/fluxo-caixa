import React, { useState, useEffect } from 'react';
import api from '../api';

function FluxoCaixaList() {
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
      console.error('Erro ao carregar dados:', error);
    }
  };

  const saldo =
    entradas.reduce((total, item) => total + Number(item.valor), 0) -
    saidas.reduce((total, item) => total + Number(item.valor), 0);

  return (
    <div>
      <h2>Fluxo de Caixa</h2>

      <h3>
        Saldo Atual: R$ {saldo.toFixed(2)}
      </h3>

      <h3>Entradas</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {entradas.map((entrada) => (
            <tr key={entrada.id}>
              <td>{entrada.descricao}</td>
              <td>{entrada.categoria}</td>
              <td>{entrada.cliente}</td>
              <td>R$ {Number(entrada.valor).toFixed(2)}</td>
              <td>{new Date(entrada.data).toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h3>Saídas</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Fornecedor</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {saidas.map((saida) => (
            <tr key={saida.id}>
              <td>{saida.descricao}</td>
              <td>{saida.categoria}</td>
              <td>{saida.fornecedor}</td>
              <td>R$ {Number(saida.valor).toFixed(2)}</td>
              <td>{new Date(saida.data).toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>

       </div>
  );
}

export default FluxoCaixaList;