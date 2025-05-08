DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.


-- “Meu DELETE não foi permitido…”

-- Caso haja relações entre as tabelas (primary key e foreign keys) e existam restrições aplicadas a elas, ao executar o DELETE ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da foreign key. Essas restrições podem ser as seguintes:

-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;  

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';