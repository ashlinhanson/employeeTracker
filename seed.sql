INSERT INTO department (name)

VALUES ("Sales"), ("Customer Service"), ("Accounting"), ("Quality Assuarance"), ("Misc Department");

INSERT INTO role (title, salary, department_id)

VALUES ("Branch Manager", 75,000.00, 5),
("Salesperson", 35,000.00, 1),
("Accountant", 45,000.00, 3),
("Customer Service Representative", 38,000.00, 2),
("Quality Assurance Agent", 38,000.00, 4),
("Receptionist", 35,000.00, 5),
("Temp Employee", 20,000.00, 5),
("Human Resources Representative", 50,000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Michael", "Scott"), ("Dwight", "Shrute"), ("Jim", "Halpert"), ("Pam", "Beesly"),
("Kelly", "Kapoor"), ("Ryan", "Howard"), ("Creed", "Bratton"), ("Meredith", "Palmer"), 
("Toby", "Flenderson"), ("Angela", "Martin"), ("Phyllis", "Vance"), ("Oscar", "Martinez"), 
("Kevin", "Malone"), ("Stanley", "Hudson");


