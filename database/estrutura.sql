CREATE TABLE entradas (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    cliente VARCHAR(100),
    valor NUMERIC(10,2) NOT NULL,
    data DATE DEFAULT CURRENT_DATE
);
CREATE TABLE saidas (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    fornecedor VARCHAR(100),
    valor NUMERIC(10,2) NOT NULL,
    data DATE DEFAULT CURRENT_DATE
);
SELECT 
  (SELECT COALESCE(SUM(valor),0) FROM entradas WHERE DATE_PART('month', data) = 9) -
  (SELECT COALESCE(SUM(valor),0) FROM saidas WHERE DATE_PART('month', data) = 9) 
  AS saldo_mensal;
SELECT categoria, SUM(valor) 
FROM entradas 
GROUP BY categoria;
