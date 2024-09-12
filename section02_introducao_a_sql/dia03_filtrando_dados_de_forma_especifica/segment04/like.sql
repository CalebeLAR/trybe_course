-- Você está tentando se lembrar do nome de um filme a que já assistiu, mas só se lembra de que ele terminava com don no nome. Como seria possível usar o LIKE para te ajudar a encontrá-lo?

SELECT * FROM sakila.film
WHERE title LIKE '%don';

SELECT * FROM sakila.film
WHERE title LIKE '%don';

SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

SELECT * FROM sakila.film
WHERE title LIKE '_C%';

SELECT * FROM sakila.film
WHERE title LIKE '________';

SELECT * FROM sakila.film
WHERE title LIKE 'E__%';