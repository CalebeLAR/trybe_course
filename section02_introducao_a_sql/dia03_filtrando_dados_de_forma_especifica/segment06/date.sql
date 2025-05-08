--  Vamos dizer que queremos encontrar pagamentos realizados na data 2005-07-31 na tabela sakila.payment. Há várias formas de fazer isso.

-- Usando a função DATE(coluna_do_tipo_date):

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31'; -- Resultado da pesquisa. Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos 

-- Usando LIKE para valores aproximados:
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%'; -- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos 

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52'; -- Encontra um pagamento com dia e hora exatos 

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';


data, ano, mês, dia, hora, minuto e segundo
(`rental_date`)
