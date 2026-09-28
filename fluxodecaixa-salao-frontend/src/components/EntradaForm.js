import React, { useState } from 'react';
import api from '../api';

function EntradaForm({ onEntradaRegistrada }) {
  const [form, setForm] = useState({
    descricao: '',
    categoria: '',
    cliente: '',
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
      await api.post('/entradas', form);

      if (onEntradaRegistrada) {
        onEntradaRegistrada();
      }

      setForm({
        descricao: '',
        categoria: '',
        cliente: '',
        valor: '',
        data: ''
      });

    } catch (error) {
      console.error('Erro ao registrar entrada:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
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
        <option value="Serviço">Serviço</option>
        <option value="Aluguel Sala">Aluguel Sala</option>
        <option value="Venda Produto">Venda Produto</option>
      </select>

      <input
        type="text"
        name="cliente"
        placeholder="Cliente"
        value={form.cliente}
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
        Registrar Entrada
      </button>

    </form>
  );
}

export default EntradaForm;

