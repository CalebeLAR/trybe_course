-- Utilizando o schema hr

SELECT
    Employee.manager_id,  Employee.manager_id,
    Manager.employee_id,  Manager.employee_id
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager
ON Employee.manager_id = Manager.employee_id;
    
SELECT * FROM hr.employees
WHERE employee_id = manager_id;