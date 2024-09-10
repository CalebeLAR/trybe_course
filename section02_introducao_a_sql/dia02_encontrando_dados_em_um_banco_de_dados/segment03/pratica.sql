-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'roraima';	
SELECT 'calebe', 'leão';

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'roraima' as cidade_natal, 24 as idade;	
SELECT 'calebe' as nome, 'leão' as sobre_nome;