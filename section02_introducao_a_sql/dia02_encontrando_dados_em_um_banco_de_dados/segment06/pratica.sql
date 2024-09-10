-- Essa é a tabela staff do banco de dados sakila. Como você poderia responder às seguintes questões?
--  Quantas senhas temos cadastradas nessa tabela?
SELECT count(`password`) FROM sakila.staff;
--  Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT count(*) FROM sakila.staff;