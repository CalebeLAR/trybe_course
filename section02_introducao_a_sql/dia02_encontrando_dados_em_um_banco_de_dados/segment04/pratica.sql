--     Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT concat(title,": ", release_year) as 'Lançamento do Filme' FROM sakila.film;
--     Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
SELECT concat(address,"		", district) as 'Endereço' FROM sakila.address;
