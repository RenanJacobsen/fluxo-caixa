import React, { useState } from 'react';
import './App.css';

import Login from './components/Login';
import EntradaForm from './components/EntradaForm';
import SaidaForm from './components/SaidaForm';
import FluxoCaixaList from './components/FluxoCaixaList';
import RelatoriosFinanceiros from './components/RelatoriosFinanceiros';

function App() {
  const [logado, setLogado] = useState(false);

  const [atualizar, setAtualizar] = useState(false);

  const atualizarDados = () => {
    setAtualizar(prev => !prev);
  };

  if (!logado) {
    return (
      <Login
        onLogin={() => setLogado(true)}
      />
    );
  }

  return (
    <div>
      <h1>
        Sistema de Fluxo de Caixa
      </h1>

      <EntradaForm
        onEntradaRegistrada={atualizarDados}
      />

      <hr />

      <SaidaForm
        onSaidaRegistrada={atualizarDados}
      />

      <hr />

      <FluxoCaixaList
  atualizar={atualizar}
  onAtualizarDados={atualizarDados}
/>
      <hr />

      <RelatoriosFinanceiros
  atualizar={atualizar}
/>
    </div>
  );
}

export default App;