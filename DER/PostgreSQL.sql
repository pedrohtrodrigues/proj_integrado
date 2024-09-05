CREATE TABLE usuario (
  usuario_id SERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(20) NOT NULL
);

CREATE TABLE sessao (
  sessao_id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuario(usuario_id),
  data_inicio DATE,
  data_fim DATE
);

CREATE TABLE recuperacao_senha (
  recuperacao_id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuario(usuario_id),
  rtoken VARCHAR(6),
  data_expiracao TIMESTAMP
);

CREATE TABLE configuracao_usuario (
  configuracao_id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuario(usuario_id),
  lembrar BOOLEAN
);

INSERT INTO usuario (email, senha) 
VALUES ('Matheus@gmail.com', '123456789');

INSERT INTO sessao (usuario_id, data_inicio, data_fim) 
VALUES (1, '2024-09-01', '2024-09-03');

INSERT INTO recuperacao_senha (usuario_id, rtoken, data_expiracao) 
VALUES (1, '213123', '2024-09-03 23:59:59');

INSERT INTO configuracao_usuario (usuario_id, lembrar) 
VALUES (1, TRUE);

SELECT * FROM usuario;
SELECT * FROM sessao;
SELECT * FROM recuperacao_senha;
SELECT * FROM configuracao_usuario;


SELECT * FROM usuario
JOIN sessao ON usuario.usuario_id = sessao.usuario_id

