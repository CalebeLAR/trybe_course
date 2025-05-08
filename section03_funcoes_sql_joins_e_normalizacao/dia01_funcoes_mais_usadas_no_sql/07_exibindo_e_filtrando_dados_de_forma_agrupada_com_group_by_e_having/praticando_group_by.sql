--  Praticando GROUP BY
--     Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT 
	IF (`active`= 1,'ativo','inativo') AS 'active',
    COUNT(*) AS 'quantidade de clientes'
FROM `sakila`.`customer`
GROUP BY `active`;

--     Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT 
	IF (`store_id`= 1, 'LOJA 2', 'LOJA 1') AS 'LOJA',
    IF ( `active`= 1, 'ATIVO', 'INATIVO') AS 'STATUS CLIENTE',
    COUNT(*)  AS 'quantidade de clientes'
FROM `sakila`.`customer`
GROUP BY `store_id`, `active` ORDER BY `store_id` DESC;

--     Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT `rating`, AVG(`rental_duration`) AS 'média de duração de locação' FROM `sakila`.`film`
GROUP BY `rating` 
ORDER BY `média de duração de locação` DESC;

--     Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT 
	`district`,
    COUNT(*) AS `quantidade de endereços registrados` 
FROM `sakila`.`address`
GROUP BY `district`
ORDER BY `quantidade de endereços registrados` DESC;


