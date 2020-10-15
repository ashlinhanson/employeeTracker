const inquirer = require("inquirer");
const mysql = require ("mysql");
const connection = require("./configdb");


connection.connect(function(err) {
    if (err) throw err;
    console.log(`connected via ${connection.threadId}`)
    startApp();
});

function startApp(){
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
        if (answer.optionChoice === "Add employee, role, or department"){
            addOption();
        }else if(answer.optionChoice === "View employees, roles, or departments"){
            viewingOption();
        }else if(answer.optionChoice === "Update employee roles"){
            updateEmpRole();
        };
    });
};

function addOption(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Would you like to add an employee, a role, or a department?",
            choices: ["Add employee", "Add a role", "Add a department"],
            name: "addingChoice"
        }
    ]).then(answer => {
        if (answer.addingChoice === "Add employee"){
            addEmployee();
        }else if (answer.addingChoice === "Add a role"){
            addRole();
        }else if (answer.addingChoice === "Add a department"){
            addDept();
        }
    })
};


function viewingOption(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Would you like to view employees, roles, or departments?",
            choice: ["View employees", "View roles", "View departments"],
            name: "viewingChoice"
        }
    ]).then(answer => {
        if (answer.viewingChoice === "View employees"){
            viewEmployees();
        }else if (answer.viewingChoice === "View roles"){
            viewRoles();
        }else if (answer.viewingChoice === "View departments"){
            viewDept();
        }
    })
}

function updateEmpRole(){
    // update employee role function
};

// adding functions

function addRole(){
    //function to add a role
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the role being added?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the id for the new role?",
            name: "roleId"
        },
        {
            type:"input",
            message: "What is the salary for this role?",
            name: "roleSalary",
        },
        {
            type: "input",
            message: "What department does this belong in?",
            name: "roleDept"
        }
    ]).then(answer => {
        
        const {roleName, roleId, roleSalary, roleDepartment} = answer;
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: answer.roleName,
                id: answer.roleId,
                salary: answer.roleSalary,
                department_id: answer.roleDept
                
            }, function(err, results){
                if (err) throw err;
                console.log("The role was added successfully!");
            }
        )
    });
};

function addEmployee(){
    //function to add an employee
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the new employees first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the new employees last name?",
            name: "lastName"
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "employeeId"
        },
        {
            type: "input",
            message: "What is the employee's role ID?",
            name: "employeeRole"
        },
        {
            type: "input",
            message: "What is the employee's manager ID?"
        }
    ]).then(answer => {
        const {firstName, lastName} = answer; 
        
        connection.query(
            {
                first_name: answer.firstName,
                last_name: answer.lastName
            }, function (err, result){
                if (err) throw err;
                console.log("The employee has been added successfully")
            }
        )
    })
};

function addDept(){
    //function for adding a dept
    inquire
    .prompt([
        {
            name: "deptName",
            type: "input",
            message: "What is the name of the department you are adding"
        },
    ]).then(function(answer){
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.deptName
            },
            function (err) {
                if (err) throw err;
                console.log("Your department has been added successfully");
                addDept();
            }
        );
    });
};

// viewing functions

function viewRoles(){
    //function to view roles
    connection.query(
        "SELECT * FROM role",
        function(err, results){
            if (err) throw err;
            console.log(results);
        }
    )

};

function viewEmployees(){
    //function to view employees
    connection.query("SELECT * FROM employee", function(err, results){
        if (err) throw err;
        console.log(results);
    });

};



function viewDept(){
    //function for viewing the departments
    connection.query("SELECT * FROM department", function(err, results){
        if (err) throw err;
        console.log(results);
})};


