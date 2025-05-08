-- Para fixar

-- Para praticar, vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.

--     Monte um query que exiba:
--         A média de duração dos filmes e dê o nome da coluna de ‘Media de Duracao’;
--         A duração mínima dos filmes como ‘Duracao Minima’;
--         A duração máxima dos filmes como ‘Duracao Maxima’;
--         A soma de todas as durações como ‘Tempo de Exibicao Total’;
--         E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.

SELECT 
  AVG(`length`) AS 'Media de Duracao', 
  MIN(`length`) AS 'Media de Duracao', 
  MAX(`length`) AS 'Media de Duracao', 
  SUM(`length`) AS 'Media de Duracao', 
  COUNT(*) AS 'Media de Duracao'
FROM `sakila`.`film`;