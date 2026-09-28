# 💰 Sistema de Fluxo de Caixa para Salão de Beleza

Sistema completo para gerenciamento financeiro de um salão de beleza.

Permite o controle de entradas e saídas financeiras, cálculo automático de saldo e geração de relatórios para acompanhamento do fluxo de caixa.

Inclui:

- Frontend em React
- Backend em Node.js e Express
- Banco de Dados PostgreSQL

---

# 📂 Estrutura do Projeto

```text
fluxo-caixa/
├── fluxodecaixa-salao-frontend/   # Aplicação React
├── fluxodecaixa-salao-backend/    # API Node.js/Express
├── database/                      # Scripts SQL
└── README.md
```

---

# 🚀 Tecnologias Utilizadas

### Frontend
- React
- Axios

### Backend
- Node.js
- Express
- PostgreSQL
- Dotenv

### Banco de Dados
- PostgreSQL

---

# ⚙️ Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone https://github.com/RenanJacobsen/fluxo-caixa.git
cd fluxo-caixa
```

---

## 2. Configurar o Banco de Dados

Crie o banco PostgreSQL:

```sql
CREATE DATABASE postgres;
```

Crie as tabelas:

```sql
CREATE TABLE entradas (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    cliente VARCHAR(255),
    valor NUMERIC(10,2) NOT NULL,
    data DATE NOT NULL
);
```

```sql
CREATE TABLE saidas (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    fornecedor VARCHAR(255),
    valor NUMERIC(10,2) NOT NULL,
    data DATE NOT NULL
);
```

---

## 3. Configurar o Backend

Acesse:

```bash
cd fluxodecaixa-salao-backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```env
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
```

---

## 4. Rodar o Backend

```bash
node server.js
```

Servidor disponível em:

```text
http://localhost:3001
```

---

## 5. Rodar o Frontend

Abra outro terminal:

```bash
cd fluxodecaixa-salao-frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm start
```

Aplicação disponível em:

```text
http://localhost:3000
```

---

# 📊 Funcionalidades

✅ Cadastro de Entradas Financeiras

✅ Cadastro de Saídas Financeiras

✅ Controle de Fluxo de Caixa

✅ Relatório Financeiro

✅ Cálculo Automático de Saldo

✅ Integração com PostgreSQL

✅ API REST em Node.js

✅ Interface Responsiva em React

---

# 🔒 Configuração de Ambiente

Arquivo `.env`:

```env
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
```

---

# 📸 Telas do Sistema

- Cadastro de Entradas
- Cadastro de Saídas
- Fluxo de Caixa
- Relatório Financeiro

---

# 👨‍💻 Autor

Projeto desenvolvido por **Renan Jacobsen** e demais alunos da **UNIVESP** para a disciplina de **Projeto Integrador II**.

---

# 📄 Licença

Este projeto possui fins acadêmicos e educacionais.



