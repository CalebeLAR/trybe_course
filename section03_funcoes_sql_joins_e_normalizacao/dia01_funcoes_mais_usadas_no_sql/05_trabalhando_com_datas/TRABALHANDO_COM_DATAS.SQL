-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- 239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2024-10-08 00:00:00', '2024-10-07 00:00:00');

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual


SELECT TIMEDIFF('2024-10-08 00:00:00', ADDTIME(NOW(), '-03:00:00'));





