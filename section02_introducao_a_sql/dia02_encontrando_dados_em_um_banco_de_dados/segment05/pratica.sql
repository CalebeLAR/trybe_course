

-- Feito isso, você terá acesso à tabela Estudantes do banco de dados Escola. Levando em conta a explicação que você acabou de ver, como você montaria uma query para encontrar os seguintes dados?

--  Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

--  Quantas linhas você encontraria na query anterior?
-- 		5 linhas

--  Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Estudantes;
--  Quantas linhas você encontraria na query anterior?
-- 		4 linhas
--  Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade FROM Escola.Estudantes;

--  Quantas linhas você encontraria na query anterior?
--      4 linhas

