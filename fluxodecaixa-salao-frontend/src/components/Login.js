import React, { useState } from 'react';

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = (e) => {
    e.preventDefault();

    if (
      usuario === 'admin' &&
      senha === '123456'
    ) {
      onLogin();
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={fazerLogin}>
        <div>
          <label>Usuário:</label>
          <br />
          <input
            type="text"
            value={usuario}
            onChange={(e) =>
              setUsuario(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Senha:</label>
          <br />
          <input
            type="password"
            value={senha}
            onChange={(e) =>
              setSenha(e.target.value)
            }
          />
        </div>

        <br />

        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;