SELECT first_name FROM sakila.actor GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name;

-- Também podemos utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna.
SELECT rating, rental_rate, COUNT(*) as total FROM sakila.film
GROUP BY rating, rental_rate;

-- explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, rental_rate, SUM(replacement_cost)
FROM sakila.film
GROUP BY rating, rental_rate ORDER BY rental_rate;




