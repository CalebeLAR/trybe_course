--  Para fixar:

-- Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila. Antes de começar a escrever suas queries, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

--     Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.alter
SELECT actor.actor_id, actor.first_name, film_actor.film_id 
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id;

--     Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT S.first_name, S.last_name, A.address 
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

--     Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY first_name DESC
LIMIT 100;

--     Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

--     Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT customer_id, COUNT(*) AS quantity FROM sakila.rental
GROUP BY customer_id;

SELECT C.first_name, C.last_name, COUNT(R.customer_id) AS quantity
FROM sakila.customer AS C
INNER JOIN sakila.rental AS R
ON C.customer_id = R.customer_id
WHERE C.active = 1
GROUP BY R.customer_id
ORDER BY C.first_name, C.last_name DESC;

--     Monte uma query que exiba o nome, sobrenome e a media de pagamento (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT COUNT(1) FROM sakila.payment
WHERE staff_id NOT IN (1,2);
SELECT staff_id, AVG(amount) AS avg_amount
FROM sakila.payment
-- WHERE YEAR(payment_date) = '2006'
GROUP BY staff_id;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, AVG(p.amount) AS avg_amount_2006 
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(payment_date) = '2006'
GROUP BY s.first_name, s.last_name;

--     Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
-- actor.actor_id, actor.first_name, film_actor.film_id
SELECT actor.actor_id, actor.first_name, film_actor.film_id, film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN sakila.film AS film
ON film.film_id = film_actor.film_id;

