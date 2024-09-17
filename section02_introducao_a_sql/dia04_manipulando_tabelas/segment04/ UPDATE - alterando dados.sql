SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;