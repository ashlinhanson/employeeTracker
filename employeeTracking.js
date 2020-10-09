const inquirer = require("inquirer");
const mysql = require ("mysql");
const { allowedNodeEnvironmentFlags } = require("process");



let connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "employeetracking_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(`connected via ${connection.threadId}`)
});

inquirer
.prompt([
    {
        type: "list",
        message: "Welcome to The Employee Tracking System. What are you needing to do?",
        choices: ["Add employee, role, or department", "View employees, roles, or departments", 
        "Update employee roles"],
        name: "optionChoice"
    }
]).then(answer => {
    if(answer.name === "Add employee, role, department"){
        inquirer
        .prompt([
            {
                type: "list",
                message: "Are you wanting to add an employee, a role, a department or exit?",
                choices: ["Employee", "Role", "Department", "Exit"],
                name: addingChoice
            }
        ]).then(answer => {
            if(answer.name === "Employee"){
                addEmployee();
            }else if(answer.name === "Role"){
                addRole();
            }else if(answer.name === "Department"){
                addDept();
            };
            // }else(answer.name === "Exit"){
            //     startFunc();
            // }
        });
    }else if(answer.name === "View employees, roles, or departments"){
        inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to view employees, roles, departments or exit?",
                choices: ["Employees", "Roles", "Departments", "Exit"],
                name: viewingChoice
            }
        ]).then(answer => {
            if(answer.name === "Employees"){
                viewEmployees();
            }else if(answer.name === "Roles"){
                viewRoles();
            }else if(answer.name === "Departments"){
                viewDepts();
            }
        });
    }else if(answer.name === "Update employee roles"){
        inquirer
        .prompt([
            {
                type: "rawlist",
                message: "What would you like to update?",
                choices : function() {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                      choiceArray.push(results[i].item_name);
                    }
                    return choiceArray;
                  },
                name: updateRole,
            }
        ])
    }
})