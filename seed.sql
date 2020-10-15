INSERT INTO department (id, name)

VALUES (1, "Sales"), 
(2, "Customer Service"), 
(3, "Accounting"), 
(4, "Quality Assuarance"), 
(5, "Misc Department");

INSERT INTO role (id, title, salary, department_id)

VALUES (10, "Branch Manager", 75000.00, 5),
(11, "Salesperson", 35000.00, 1),
(12, "Accountant", 45000.00, 3),
(13, "Customer Service Representative", 38000.00, 2),
(14, "Quality Assurance Agent", 38000.00, 4),
(15, "Receptionist", 35000.00, 5),
(16, "Temp Employee", 20000.00, 5),
(17, "Human Resources Representative", 50,000.00, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)

VALUES (20, "Michael", "Scott", 10), 
(21, "Dwight", "Shrute", 11, 10), 
(22, "Jim", "Halpert", 11, 10), 
(23, "Pam", "Beesly", 15, 10),
(24, "Kelly", "Kapoor", 13, 10), 
(25, "Ryan", "Howard", 16, 10), 
(26, "Creed", "Bratton", 14, 10), 
(27, "Meredith", "Palmer", 14, 10), 
(28, "Toby", "Flenderson", 17), 
(29, "Angela", "Martin", 12, 10), 
(30, "Phyllis", "Vance", 11, 10), 
(31, "Oscar", "Martinez", 12, 10), 
(32, "Kevin", "Malone", 12, 10), 
(33, "Stanley", "Hudson", 11, 10);


