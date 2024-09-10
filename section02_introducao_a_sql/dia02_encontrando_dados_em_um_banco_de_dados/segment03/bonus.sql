-- Bônus: Vamos praticar mais um pouco?
-- Para aquecer um pouco mais os motores…
--   Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8;
--   Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
SELECT now() as 'Data atual';
--   Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:
USE sakila;
--   Escreva uma query que selecione todos os registros da tabela city;
SELECT * FROM city;
--   Escreva uma query que exiba apenas os registros das colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM customer;
--   Escreva uma query que exiba todos os registros da tabela rental;
SELECT * FROM rental;
--   Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT 'description', title, release_year FROM film;
--   Utilize o SELECT para explorar todas as tabelas do banco de dados.
--   	SELECT * FROM sakila.'nome_tabela';