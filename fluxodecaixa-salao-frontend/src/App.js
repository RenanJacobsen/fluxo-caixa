import React from 'react';

import EntradaForm from './components/EntradaForm';
import SaidaForm from './components/SaidaForm';
import FluxoCaixaList from './components/FluxoCaixaList';
import RelatoriosFinanceiros from './components/RelatoriosFinanceiros';

function App() {
  return (
    <div>
      <h1>Fluxo de Caixa - Salão de Beleza</h1>

      <EntradaForm />

      <hr />

      <SaidaForm />

      <hr />

      <FluxoCaixaList />

      <hr />

      <RelatoriosFinanceiros />
    </div>
  );
}

export default App;