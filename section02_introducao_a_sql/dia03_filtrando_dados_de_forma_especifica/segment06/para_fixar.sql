-- Para Fixar

-- Você já tem as ferramentas em mãos, então quero ver os dedos se mexendo. Let’s GO!!!

--     Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT count(*) AS 'pagamentos com a data de retorno 2005-05-25' FROM `sakila`.`payment` WHERE DATE(`payment_date`) = '2005-05-25';

--     Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
SELECT count(*) AS 'pagamentos feitos entre 01/07/2005 e 22/08/2005' FROM `sakila`.`payment`
WHERE `payment_date` BETWEEN '2005-07-01 00:00:00' AND '2005-08-22 23:59:59';

--     Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
SELECT 
YEAR(`rental_date`) AS 'YEAR',
MONTH(`rental_date`) AS 'MONTH',
DAY(`rental_date`) AS 'DAY',
HOUR(`rental_date`) AS 'HOUR',
MINUTE(`rental_date`) AS 'MINUTE',
SECOND(`rental_date`) AS 'SECOND'
FROM `sakila`.`rental` WHERE `rental_id` = 10330;

--     Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
