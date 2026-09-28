import React, { useState } from 'react';
import api from '../api';

function SaidaForm({ onSaidaRegistrada }) {
  const [form, setForm] = useState({
    descricao: '',
    categoria: '',
    fornecedor: '',
    valor: '',
    data: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/saidas', form);

      if (onSaidaRegistrada) {
        onSaidaRegistrada();
      }

      setForm({
        descricao: '',
        categoria: '',
        fornecedor: '',
        valor: '',
        data: ''
      });

    } catch (error) {
      console.error('Erro ao registrar saída:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Registrar Saída</h2>

      <input
        type="text"
        name="descricao"
        placeholder="Descrição da despesa"
        value={form.descricao}
        onChange={handleChange}
        required
      />

      <select
        name="categoria"
        value={form.categoria}
        onChange={handleChange}
        required
      >
        <option value="">Selecione a categoria</option>
        <option value="Despesas Fixas">Despesas Fixas</option>
        <option value="Produtos">Produtos</option>
        <option value="Material">Material</option>
        <option value="Energia">Energia</option>
        <option value="Água">Água</option>
        <option value="Internet">Internet</option>
        <option value="Outros">Outros</option>
      </select>

      <input
        type="text"
        name="fornecedor"
        placeholder="Fornecedor"
        value={form.fornecedor}
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.01"
        name="valor"
        placeholder="Valor"
        value={form.valor}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="data"
        value={form.data}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Registrar Saída
      </button>

    </form>
  );
}

export default SaidaForm;
