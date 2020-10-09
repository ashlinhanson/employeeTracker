INSERT INTO department (id, name)

VALUES (1, "Sales"), (2, "Customer Service"), (3, "Accounting"), (4, "Quality Assuarance"), (5, "Other Department");

INSERT INTO role (id, title, salary, department_id)

VALUES (10, "Branch Manager", 75,000.00, 5),
(11, "Salesperson", 35,000.00, 1),
(12, "Accountant", 45,000.00, 3),
(13, "Customer Service Representative", 38,000.00, 2),
(14, "Quality Assurance Agent", 38,000.00, 4),
(15, "Receptionist", 35,000.00, 5),
(16, "Temp Employee", 20,000.00, 5),
(17, "Human Resources Representative", 50,000.00, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)